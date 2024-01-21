import { yupResolver } from '@hookform/resolvers/yup'
import { StepConfig as Step, Values, WizardValues } from '../types'

export function getMode(activeStep: Step) {
  const onChange = activeStep.validateOnChange ?? true
  const onBlur = activeStep.validateOnBlur ?? true
  if (onChange && onBlur) {
    return 'all'
  }
  if (onChange) {
    return 'onChange'
  }
  if (onBlur) {
    return 'onBlur'
  }
  return 'onSubmit'
}

function validateResolver(validateFn: Step['validate'], values: WizardValues) {
  return (stepValues: Values) => {
    const errors = validateFn!(stepValues, values)
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      return {
        values: stepValues,
        errors: {}
      }
    }
    const formattedErrors = Object.keys(errors).reduce((acc, key) => {
      return { ...acc, [key]: { message: errors[key] } }
    }, {})
    return {
      values: {},
      errors: formattedErrors
    }
  }
}

export function getResolver(activeStep: Step, values: WizardValues) {
  if (activeStep.validationSchema) {
    return yupResolver(activeStep.validationSchema)
  }
  if (activeStep.validate) {
    return validateResolver(activeStep.validate, values)
  }
  return undefined
}
