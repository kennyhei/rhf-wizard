import { yupResolver } from '@hookform/resolvers/yup'
import { StepConfig as Step } from '../types'

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

export function getResolver(activeStep: Step) {
  if (activeStep.validationSchema) {
    return yupResolver(activeStep.validationSchema)
  }
  return undefined
}
