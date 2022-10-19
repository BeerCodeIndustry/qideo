import { Form, Formik, Field, ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'

import { FormContainer, ButtonSignUp, ErrorMessageStyle } from './SignUp.styles'
import { SignUpParams } from './SignUp.types'
import { validationSchema } from '../../utils/validate'

export const SignUp: React.FC = () => {
  const { t } = useTranslation()

  const initialValues: SignUpParams = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
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
          <label htmlFor='email'>{t('common:email')}</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' component={ErrorMessageStyle} />
          <label htmlFor='password'>{t('common:password')}</label>
          <Field type='password' id='password' name='password' />
          <ErrorMessage name='password' component={ErrorMessageStyle} />
          <label htmlFor='repeatPassword'>{t('common:repeatPassword')}</label>
          <Field id='repeatPassword' name='repeatPassword' type='password' />
          <ErrorMessage name='repeatPassword' component={ErrorMessageStyle} />
          <ButtonSignUp type='submit'>Sign Up</ButtonSignUp>
        </FormContainer>
      </Form>
    </Formik>
  )
}
