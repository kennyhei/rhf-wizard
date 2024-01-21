import * as Yup from 'yup'
import { WizardValues, Values } from '@/types'

/* Schemas for "StepConfig.validationSchema" */

export const ContactInfoSchema = Yup.object({
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  age: Yup.number().min(0).positive().max(125).required('This field is required'),
  email: Yup.string().email()
})

/*
  Functions for "StepConfig.validate".

  Using "validate" is preferred if validation is dependent
  on values that were filled in previous steps.
*/

export function validateUsername(stepValues: Values, values: WizardValues) {
  const errors: Values<string> = {}
  if (!stepValues.username) {
    errors.username = 'This field is required'
  } else if (!stepValues.username.toLowerCase().includes(values.ContactInfo.firstName.toLowerCase())) {
    errors.username = `Username should contain your first name (${values.ContactInfo.firstName})`
  }
  return errors
}
