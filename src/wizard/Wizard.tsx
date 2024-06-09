import { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { getMode, getResolver } from '../helpers/form'
import { WizardContext } from '../helpers/hooks'
import { buildHashSteps, resolveHashStep, updateHash } from '../helpers/hash'
import { WizardProps, StepConfig as Step, WizardContextValues, WizardValues, Values } from '../types'

function Wizard({
  steps,
  onCompleted,
  onStepChanged,
  enableHash,
  // Components
  header,
  wrapper,
  footer
}: WizardProps) {
  let initialStep: Step = steps[0]
  let hashes = {}
  if (enableHash) {
    hashes = buildHashSteps(steps)
    initialStep = resolveHashStep(hashes) || initialStep
  }

  // State
  const [ activeStep, setActiveStep ] = useState(initialStep)
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  // Gather data of all forms from each step here
  const [ values, setValues ] = useState<WizardValues>({})

  const defaultValues = useMemo(() => {
    return getInitialValues(activeStep);
  }, [activeStep])

  const methods = useForm({
    defaultValues,
    mode: getMode(activeStep),
    resolver: getResolver(activeStep, values),
    shouldUnregister: true
  })
  const { reset } = methods

  // Variables
  const currentIndex: number = steps.findIndex(s => s.id === activeStep.id)
  const stepNumber: number = currentIndex + 1
  const totalSteps: number = steps.length
  const isFirstStep: boolean = stepNumber === 1
  const isLastStep: boolean = stepNumber === totalSteps

  // Reset initial values when active step is changed
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  // Hash logic
  useEffect(() => {
    if (!enableHash) {
      return
    }
    window.addEventListener('hashchange', handleHashChange)
    updateHash(hashes, activeStep)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [activeStep])

  function handleHashChange() {
    const step = resolveHashStep(hashes)
    if (step?.id === activeStep.id) {
      return
    }
    setActiveStep(step)
  }

  // Step resolve logic
  async function _getProceedingStep(
    remainingSteps: Step[],
    newValues: WizardValues,
    direction: number
  ) {
    let proceedingStep
    for (let idx = 0; idx < remainingSteps.length; ++idx) {
      const step = remainingSteps[idx]
      // Check if "shouldSkip" attr exists
      if (step.shouldSkip === undefined) {
        proceedingStep = step
        break
      }
      const shouldSkip = await step.shouldSkip(newValues, direction)
      if (!shouldSkip) {
        proceedingStep = step
        break
      }
    }
    return proceedingStep
  }

  async function _resolveNextStep(newValues: WizardValues) {
    // Loop remaining steps until non-skippable step is found
    const remainingSteps = steps.slice(currentIndex + 1)
    const nextStep = await _getProceedingStep(remainingSteps, newValues, 1)
    return nextStep
  }

  async function _resolvePreviousStep(newValues: WizardValues) {
    // Loop remaining steps backwards until non-skippable step is found
    const remainingSteps = steps.slice(0, currentIndex).reverse()
    const previousStep = await _getProceedingStep(remainingSteps, newValues, -1)
    return previousStep
  }

  // Step handlers
  function handleCompleted(values: WizardValues) {
    if (!onCompleted) {
      return
    }
    // Flatten values, e.g.
    // `{ StepName: { name: 'John' }, StepAge: { age: 10 } }` => `{ name: 'John', age: 10 }`
    let result = {}
    Object.keys(values).forEach((stepId: string | number) => {
      result = { ...result, ...values[stepId] }
    })
    onCompleted(result)
  }

  async function handleNext(stepValues: Values) {
    try {
      // Run custom submit handler first
      if (activeStep.onSubmit) {
        setIsLoading(true)
        stepValues = await activeStep.onSubmit(stepValues, values)
        setIsLoading(false)
      }
      const wizardValues =  {
        ...values,
        [activeStep.id]: { ...stepValues }
      }
      setValues(wizardValues)
      const nextStep = await _resolveNextStep(wizardValues)
      if (!nextStep) {
        // No next step found, wizard has been completed
        // so let's call handleCompleted
        handleCompleted(wizardValues)
        return
      }
      // Additional handler when step is changed
      if (onStepChanged) {
        onStepChanged(activeStep, nextStep, wizardValues)
      }
      setActiveStep(nextStep)
    } catch (error: any) {
      console.log(error)
      setIsLoading(false)
    }
  }

  async function handlePrevious(stepValues: Values) {
    let wizardValues = null
    if (activeStep.keepValuesOnPrevious ?? true) {
      wizardValues = {
        ...values,
        [activeStep.id]: { ...stepValues }
      }
      setValues(wizardValues)
    }
    wizardValues = wizardValues || values
    const previousStep = await _resolvePreviousStep(wizardValues)
    if (!previousStep) {
      return
    }
    // Additional handler when step is changed
    if (onStepChanged) {
      onStepChanged(activeStep, previousStep, wizardValues)
    }
    setActiveStep(previousStep)
  }

  // Utility function
  function updateStep(key: string, value: any) {
    setActiveStep({ ...activeStep, [key]: value })
  }

  // Misc
  function getInitialValues(step: Step) {
    return values[step.id] || step.initialValues || {}
  }

  const context: WizardContextValues = {
    values,
    setValues,
    setIsLoading,
    updateStep,
    goToPreviousStep: () => handlePrevious(methods.getValues()),
    goToNextStep: () => handleNext(methods.getValues()),
    goToStep: (index: number) => setActiveStep(steps[index]),
    activeStep,
    stepNumber,
    totalSteps,
    isLoading,
    isFirstStep,
    isLastStep
  }

  return (
    <WizardContext.Provider value={context}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleNext)}>
          {header}
          {wrapper || activeStep.component}
          {footer}
        </form>
      </FormProvider>
    </WizardContext.Provider>
  )
}

export default Wizard
