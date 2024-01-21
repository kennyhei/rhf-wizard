import { ContactInfoSchema, validateUsername } from './validation'
import { Values, WizardValues, StepConfig } from '@/types'
import StepEmailCheck from '../components/steps/StepEmailCheck'
import StepAsync from '../components/steps/StepAsync'
import StepFinal from '../components/steps/StepFinal'

const steps: StepConfig[] = [
  {
    id: 'ContactInfo',
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: ''
    },
    // attrs defined under "fields" are for custom step renderer made
    // just for this demo folder, otherwise these aren't part of
    // the step config object
    fields: {
      inputTypes: {
        firstName: 'text',
        lastName: 'text',
        age: 'number',
        email: 'email'
      },
      placeholders: {
        firstName: 'e.g. John',
        lastName: 'e.g. Doe',
        age: 'e.g. 18',
        email: 'e.g. john@doe.com'
      }
    },
    validationSchema: ContactInfoSchema,
    disableNextOnErrors: true
  },
  {
    id: 'Username',
    helpText: 'Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.',
    initialValues: {
      username: '',
    },
    fields: {
      inputTypes: {
        username: 'text',
      }
    },
    validate: validateUsername,
    disableNextOnErrors: true
  },
  {
    id: 'EmailCheck',
    component: <StepEmailCheck />,
    hideNext: true,
    hidePrevious: true,
    shouldSkip: (values: WizardValues, direction: number) => {
      // Skip if we click "Previous" in "StepAsync"
      if (direction === -1) {
        return true
      }
      // Skip if email has been filled
      return !!values.ContactInfo.email
    }
  },
  {
    id: 'Async',
    component: <StepAsync />,
    onSubmit: async (stepValues: Values, _allValues: WizardValues) => {
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
      await delay(2000)
      return stepValues
    }
  },
  {
    id: 'Final',
    component: <StepFinal />,
    hideNext: true,
    hidePrevious: false 
  }
]

export default steps
