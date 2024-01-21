import ReactDOM from 'react-dom/client'
import * as Yup from 'yup'
import { useWizard, Wizard, BasicFooter } from '@/index'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

function StepName() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input {...register("name")} />
      <ErrorMessage errors={errors} name="name" />
    </div>
  )
}

function StepAge() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div>
      <label htmlFor="age">Age</label>
      <input type="number" {...register("age", { min: 0, max: 125 })} />
      <ErrorMessage errors={errors} name="age" />
    </div>
  )
}

function StepFinal() {
  const { values } = useWizard()
  console.log(values);
  const name = values.StepName.name
  const age = values.StepAge.age
  return (
    <div>
      <h1>You did it!</h1>
      <p>Your name is {name} and your age is {age}.</p>
      <p>Press button to complete the wizard.</p>
      <button type="submit">Finish</button>
    </div>
  )
}

function App() {
  const steps = [
    {
      id: 'StepName',
      component: <StepName />,
      initialValues: { name: 'John' },
      validationSchema: Yup.object({
        name: Yup.string().required('This field is required'),
      }),
      hidePrevious: true
    },
    {
      id: 'StepAge',
      component: <StepAge />,
      initialValues: { age: 30 },
      validationSchema: Yup.object({
        age: Yup.number().min(0).max(125).required('This field is required')
      })
    },
    {
      id: 'StepFinal',
      component: <StepFinal />,
      hideNext: true
    }
  ]

  return (
    <Wizard
      steps={steps}
      //onStepChanged={(fromStep, toStep, wizardValues) => {
      //  console.log('step changed', fromStep.id, toStep.id, wizardValues)
      //}}
      onCompleted={values => {
        alert('wizard completed')
        console.log('wizard completed', values)
      }}
      footer={<BasicFooter />}
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
