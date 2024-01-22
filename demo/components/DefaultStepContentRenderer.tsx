import { StepConfig as Step } from '@/types'
import { ErrorMessage } from '@hookform/error-message'

interface Props {
  register: any,
  activeStep: Step,
  values: any
}

function DefaultStepContentRenderer({
  register,
  activeStep,
  values
}: Props) {

  function humanize(value: string) {
    value = value[0].toUpperCase() + value.slice(1)
    return value.replace(/[A-Z]/g, ' $&')
  }

  function getFieldConstraints(yupSchema: any, fieldType: string) {
    const constraints: any = {}
    if (fieldType === 'number') {
      constraints.onKeyDown = (evt: any) => {
        if (['e', 'E', '+', '-', '.', ','].includes(evt.key)) {
          evt.preventDefault()
        }
      }
    }
    const tests: object[] = yupSchema?.tests || []
    tests.forEach((test: any) => {
      switch (test.OPTIONS.name) {
        case 'min':
          constraints.min = test.OPTIONS.params.min || test.OPTIONS.params.more
          break
        case 'max':
          constraints.max = test.OPTIONS.params.max
          break
      }
    })
    return constraints
  }

  const { validationSchema, fields } = activeStep

  return (
    <div id='default' className='prose max-w-none'>
      <h2>{humanize(activeStep.id)}</h2>
      <p>{activeStep.helpText}</p>
      <div className='flex flex-row gap-6 flex-wrap'>
        {Object.keys(values || {}).map(field => (
            <div key={field} className='grow shrink-0 basis-72'>
              <label htmlFor={field} className='block mb-2 text-sm font-medium text-white'>{humanize(field)}</label>
              <input
                id={field}
                type={fields?.inputTypes[field]}
                placeholder={fields?.placeholders?.[field]}
                {...getFieldConstraints(validationSchema?.fields?.[field], fields?.inputTypes[field])}
                {...register(field)}
                className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'
              />
              <ErrorMessage
                name={field}
                render={({ message }) => <div className='text-red-400'>{message}</div>}
              />
            </div>
        ))}
      </div>
    </div>
  )
}

export default DefaultStepContentRenderer
