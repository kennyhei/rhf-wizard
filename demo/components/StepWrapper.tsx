import { useContext } from 'react'
import { useWizard } from '@/index'
import { AnimatePresence, motion } from 'framer-motion'
import DefaultStepContentRenderer from './DefaultStepContentRenderer'
import { useFormikContext } from 'formik'
import { AppContext } from '../main'

function WizardStepWrapper() {
  const { isAnimated } = useContext(AppContext)
  const { activeStep } = useWizard()
  const { initialValues, values } = useFormikContext()

  let variants = {}
  if (isAnimated) {
    variants = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    }
  }

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        key={activeStep.id}
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ type: 'tween', duration: 0.25 }}
      >
        <div className='py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32'>
          <div className='container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl'>
            {activeStep.component || (
              <DefaultStepContentRenderer
                activeStep={activeStep} 
                initialValues={initialValues}
                values={values}
              />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default WizardStepWrapper
