import { ReactNode, useState } from 'react'
import { Element } from 'react-scroll'

import { Button } from '@/components/ui/button'
import { SuccessfulSnackbar } from '@/components/ui/successful-snackbar/successful-snackbar'
import { CircularProgress } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import s from './SendForm.module.scss'
import container from '@/styles/container.module.scss'

const validationSchema = Yup.object({
  email: Yup.string().email('Некорректный адрес электронной почты').required('Обязательное поле'),
  firstName: Yup.string().required('Обязательное поле'),
  lastName: Yup.string(),
  message: Yup.string(),
  phone: Yup.number().required('Обязательное поле'),
})

export const SendForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [sendStatusMessage, setSendStatusMessage] = useState<null | string>('')
  const formik = useFormik({
    initialValues: {
      email: '',
      file: '',
      firstName: '',
      lastName: '',
      message: '',
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

      console.log(formData)

      sendEmail(formData)
      formik.resetForm()
    },
    validationSchema: validationSchema,
  })

  async function sendEmail(values: FormData) {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:5003/send-email`, {
        body: values,
        method: 'POST',
      })

      if (res.ok) {
        console.log(res)
        setLoading(false)
        setSendStatusMessage('Форма успешно отправлена!')
        formik.setStatus({ sent: true })
      } else {
        console.error(`Error: ${res.status} - ${res.statusText}`)
        formik.setStatus({ sent: true })
        setSendStatusMessage('Ошибка! Повторите попытку.')
      }
    } catch (e) {
      console.log(e)
      formik.setStatus({ sent: true })
      setSendStatusMessage('Ошибка! Повторите попытку.')
    } finally {
      setLoading(false)
    }
  }

  console.log(formik.status?.sent)

  return (
    <Element className={s.wrapper} id={'form'} name={'form'}>
      <SuccessfulSnackbar
        isOpen={formik.status?.sent}
        message={sendStatusMessage}
        setStatus={formik.setStatus}
      />
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
              {formik.touched.firstName && formik.errors.firstName && (
                <div className={s.errorText}>{formik.errors.firstName as ReactNode}</div>
              )}
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
              {formik.touched.firstName && formik.errors.firstName && (
                <div className={s.errorText}>{formik.errors.email as ReactNode}</div>
              )}
            </div>
            <div>
              <input
                className={'form-control'}
                id={'phone'}
                placeholder={'Номер телефона*'}
                type={'number'}
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className={s.errorText}>{formik.errors.phone as ReactNode}</div>
              )}
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
          {formik.submitCount > 0 && !formik.isValid && (
            <div className={s.errorText}>Пожалуйста, заполните обязательные поля.</div>
          )}
          {loading ? <CircularProgress className={s.progress} /> : ''}
          {loading && <div className={s.overlay} />}
        </form>
      </div>
    </Element>
  )
}
