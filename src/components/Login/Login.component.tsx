import { Flexbox } from '@beercode/common-frontend'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useTranslation } from 'hooks/useTranslation'

import { validationSchema } from '../../utils/validate'
import { ButtonSignUp, ErrorMessageStyle } from '../SignUp'
import { LoginParams } from './Login.types'

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
        <Flexbox flexDirection='column'>
          <label htmlFor='username'>{t('common:username')}</label>
          <Field type='text' id='username' name='username' />
          <ErrorMessage name='username' component={ErrorMessageStyle} />
          <label htmlFor='password'>{t('common:password')}</label>
          <Field type='password' id='password' name='password' />
          <ErrorMessage name='password' component={ErrorMessageStyle} />
          <ButtonSignUp type='submit'>{t('common:login')}</ButtonSignUp>
        </Flexbox>
      </Form>
    </Formik>
  )
}
