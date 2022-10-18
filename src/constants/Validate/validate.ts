import { TestQ } from './validate.types'

export const validate = (values: TestQ): TestQ => {
  const errors: TestQ = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required'
  } else if (values.repeatPassword.length > 15) {
    errors.repeatPassword = 'Must be 15 characters or less'
  } else if (values.repeatPassword.length < 5) {
    errors.repeatPassword = 'Must be 5 characters or more'
  }

  return errors
}
