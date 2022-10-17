import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { Form, LoginContainer } from './Login.styles'
import { LoginParams } from './Login.types'

export const Login: React.FC = () => {
  const { t } = useTranslation()

  const formik = useFormik<LoginParams>({
    initialValues: {
      username: '',
      password: '',
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
        <label htmlFor='password'>{t('common:password')}</label>
        <input
          id='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Form>
    </LoginContainer>
  )
}
