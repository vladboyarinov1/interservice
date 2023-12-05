import { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({})

export const SendForm = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: '', // Добавлено поле для email
      file: '',
      message: '', // Добавлено поле для сообщения
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
    <div>
      <div>
        <form encType={'multipart/form-data'} onSubmit={formik.handleSubmit}>
          <div>
            <div>
              <div>
                <label className={''} htmlFor={'file'}>
                  file
                </label>
                <input
                  className={'form-control'}
                  id={'file'}
                  onChange={e => formik.setFieldValue('file', e.currentTarget.files?.[0])}
                  type={'file'}
                />
              </div>
            </div>
            <div>
              <label className={''} htmlFor={'email'}>
                Email
              </label>
              <input
                className={'form-control'}
                id={'email'}
                type={'email'}
                {...formik.getFieldProps('email')}
              />
            </div>
            <div>
              <label className={''} htmlFor={'message'}>
                Message
              </label>
              <textarea
                className={'form-control'}
                id={'message'}
                {...formik.getFieldProps('message')}
              />
            </div>
          </div>
          <button type={'submit'}>Send Message</button>
        </form>
      </div>
    </div>
  )
}
