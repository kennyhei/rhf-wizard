import { useWizard } from '@/index'
import { useFormContext } from 'react-hook-form'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ClipLoader from 'react-spinners/ClipLoader'

function Navigation() {
  let {
    goToPreviousStep,
    isFirstStep,
    isLoading,
    activeStep: {
      hidePrevious,
      hideNext,
      disableNext,
      disableNextOnErrors
    }
  } = useWizard()
  const { formState: { isValid } } = useFormContext()
  disableNext = isLoading || disableNext || (disableNextOnErrors && !isValid)

  return (
    <div className='navigation'>
      <div className={'navigation-wrapper ' + (hidePrevious ? 'justify-end' : 'justify-between')}>
        {/* "Previous" button */}
        {!hidePrevious && (
          <button
            className='btn'
            onClick={goToPreviousStep}
            disabled={isFirstStep}
            type='button'
          >
            <BsArrowLeft className='w-8 h-8 fill-current' />
            <span>Previous</span>
          </button>
        )}
        {/* "Next" button */}
        {!hideNext && (
          // Still possible to trigger submit even though button is disabled.
          // Main reason is to display validation errors.
          <div onClick={disableNext ? undefined : undefined}>
            <button
              className='btn'
              disabled={disableNext}
              type='submit'
            >
              {isLoading && (
                <span className='mr-1 loading'>
                  <ClipLoader size={11} color='#757575' />
                </span>
              )}
              <span>Next</span>
              <BsArrowRight className='w-8 h-8 fill-current' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation
