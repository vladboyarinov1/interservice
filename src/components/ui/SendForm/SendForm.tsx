import { Element } from 'react-scroll'

import { Button } from '@/components/ui/button'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import s from './SendForm.module.scss'
import container from '@/styles/container.module.scss'

const validationSchema = Yup.object({})

export const SendForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '', // Добавлено поле для email
      file: '',
      firstName: '',
      lastName: '',
      message: '', // Добавлено поле для сообщения
      phone: '',
    },
    onSubmit: (values: Record<string, any>) => {
      const formData = new FormData()

      Object.keys(values).forEach(key => {
        formData.append(key, values[key])
      })

      if (formik.values.file) {
        formData.append('file', formik.values.file)
      }

      console.log(formData) // Проверьте, что formData заполнен

      sendEmail(formData)
      formik.resetForm()
    },
    validationSchema: validationSchema,
  })

  async function sendEmail(values: FormData) {
    try {
      const res = await fetch(`http://localhost:5003/send-email`, {
        body: values,
        method: 'POST',
      })

      if (res.ok) {
        console.log(res)
      } else {
        console.error(`Error: ${res.status} - ${res.statusText}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Element className={s.wrapper} id={'form'} name={'form'}>
      <div className={`${container.container} ${s.formContainer}`}>
        <div className={s.title}>
          <h2>Остались вопросы?</h2>
          <p>
            Заполните форму, и наши специалисты свяжутся с Вами <span>в течение рабочего дня</span>
          </p>
        </div>
        <form encType={'multipart/form-data'} onSubmit={formik.handleSubmit}>
          <div className={s.nameFormBlock}>
            <div className={s.firstName}>
              <input
                className={'form-control'}
                id={'firstName'}
                placeholder={'Имя*'}
                type={'text'}
                {...formik.getFieldProps('firstName')}
              />
            </div>
            <div>
              <input
                className={'form-control'}
                id={'lastName'}
                placeholder={'Фамилия'}
                type={'text'}
                {...formik.getFieldProps('lastName')}
              />
            </div>
            <div className={s.emailFormBlock}>
              <input
                className={'form-control'}
                id={'email'}
                placeholder={'Email*'}
                type={'email'}
                {...formik.getFieldProps('email')}
              />
            </div>
            <div>
              <input
                className={'form-control'}
                id={'phone'}
                placeholder={'Номер телефона*'}
                type={'number'}
                {...formik.getFieldProps('phone')}
              />
            </div>
            <div className={s.messageInput}>
              <input
                className={'form-control'}
                id={'message'}
                placeholder={'Доп. информация (Linkedln, Skype и т.д.)'}
                {...formik.getFieldProps('message')}
              />
            </div>
            <div className={s.sendFileField}>
              <label className={s.customFileUpload} htmlFor={'file'}>
                <p>
                  <span>Прикрепить файл</span> (файл в формате .pdf, .docx, .doc, .txt размером до
                  1Mb)
                </p>
                <input
                  accept={'.pdf,.docx,.doc,.txt'}
                  id={'file'}
                  onChange={e => formik.setFieldValue('file', e.currentTarget.files?.[0])}
                  type={'file'}
                />
              </label>
            </div>
          </div>
          <div className={s.button}>
            <Button px={40} py={20}>
              Отправить запрос
            </Button>
          </div>
        </form>
      </div>
    </Element>
  )
}
