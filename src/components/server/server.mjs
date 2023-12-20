import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import {validationResult, check, body} from 'express-validator';
import multer from 'multer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

app.on('error', (err) => {
    console.log(err);
});

const validateData = [
    check('email').isEmail().normalizeEmail(),
    check('firstName').trim().notEmpty().escape(),
    check('lastName').optional().trim().escape(), // lastName необязательное поле
    check('phone').trim().notEmpty().escape(),
    check('message').optional().trim().escape(), // message необязательное поле
];

function trimReplace(value) {
    if (typeof value === 'string') {
        return value.trim().replace(/\s+/g, ' ');
    }
    return value;
}

app.post('/send-email', upload.any(), validateData, async (req, res) => {
    console.log(req.files); // Проверьте, что файлы правильно загружены
    console.log(req.body);
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const files = req.files || [];
        let attachments = [];

        if (files.length > 0) {
            for (const file of files) {
                const encodedFilename = encodeURIComponent(file.originalname);
                const existingFile = attachments.find((attachment) => attachment.filename === encodedFilename);
                if (!existingFile) {
                    attachments.push({
                        filename: encodedFilename,
                        content: file.buffer.toString('base64'),
                        encoding: 'base64',
                    });
                }
            }
        }

        const {email, message, firstName, lastName, phone} = req.body;
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Заявка от ${firstName} ${lastName ?? '-'}`, // Добавлено || '' для избежания undefined
            html: `<p><strong>Имя: </strong>${firstName}</p>
             <p><strong>Фамилия: </strong>${lastName ?? '-'}</p>
             <p><strong>Email: </strong>${email}</p>
             <p><strong>Контактный телефон: </strong>${phone}</p>
             <p><strong>Сообщение: </strong> ${message ?? '-'}</p>
             ${attachments.map((attachment) => `<img src="data:image/${attachment.filename.split('.').pop()};base64,${attachment.content}" alt="${attachment.filename}" />`).join('')}
          `,
            attachments: attachments,
        });

        res.send('Сообщение отправлено!');
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});
