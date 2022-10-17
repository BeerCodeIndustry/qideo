import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { Form, LoginContainer } from './SignUp.styles'
import { LoginParams } from './SignUp.types'

export const SignUp: React.FC = () => {
  const { t } = useTranslation()
  const formik = useFormik<LoginParams>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: () => {},
  })

  return (
    <LoginContainer>
      <Form>
        <label htmlFor='username'>{t('common:username')}</label>
        <input
          id='username'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor='email'>{t('common:email')}</label>
        <input
          id='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor='password'>{t('common:password')}</label>
        <input
          id='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor='repeatPassword'>{t('common:repeatPassword')}</label>
        <input
          id='repeatPassword'
          name='repeatPassword'
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
      </Form>
    </LoginContainer>
  )
}
