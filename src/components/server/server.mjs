import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import {validationResult} from 'express-validator';
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

const validateData = [];

function trimReplace(value) {
    if (typeof value === 'string') {
        return value.trim().replace(/\s+/g, ' ');
    }
    return value;
}

app.post('/send-email', upload.any(), validateData, async (req, res) => {
    console.log(req.files);
    console.log(req.body);
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).send('No files uploaded.');
        }

        let attachments = [];
        files.forEach((file) => {
            attachments.push({
                filename: file.originalname,
                content: file.buffer.toString('base64'), // Кодирование файла в base64
                encoding: 'base64',
            });
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Заявка от`,
            html: `<p><strong>Email:</strong>${req.body.email}</p>
             <p><strong>Сообщение:</strong> ${req.body.message}</p>
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
