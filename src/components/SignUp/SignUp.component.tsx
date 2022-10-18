import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { Form } from './SignUp.styles'
import { SignUpParams } from './SignUp.types'

export const SignUp: React.FC = () => {
  const { t } = useTranslation()
  const formik = useFormik<SignUpParams>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: () => {},
  })

  return (
    <Form>
      <label htmlFor='username'>{t('common:username')}</label>
      <input
        id='username'
        name='username'
        type='username'
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor='email'>{t('common:email')}</label>
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor='password'>{t('common:password')}</label>
      <input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor='repeatPassword'>{t('common:repeatPassword')}</label>
      <input
        id='repeatPassword'
        name='repeatPassword'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />
    </Form>
  )
}
