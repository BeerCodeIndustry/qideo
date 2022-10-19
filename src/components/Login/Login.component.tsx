import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'

import { FormContainer } from './Login.styles'
import { LoginParams } from './Login.types'
import { validationSchema } from '../../utils/validate'
import { ErrorMessageStyle, ButtonSignUp } from '../SignUp'

export const Login: React.FC = () => {
  const { t } = useTranslation()

  const initialValues: LoginParams = {
    username: '',
    password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <Form>
        <FormContainer flexDirection='column'>
          <label htmlFor='username'>{t('common:username')}</label>
          <Field type='text' id='username' name='username' />
          <ErrorMessage name='username' component={ErrorMessageStyle} />
          <label htmlFor='password'>{t('common:password')}</label>
          <Field type='password' id='password' name='password' />
          <ErrorMessage name='password' component={ErrorMessageStyle} />
          <ButtonSignUp type='submit'>{t('common:login')}</ButtonSignUp>
        </FormContainer>
      </Form>
    </Formik>
  )
}
