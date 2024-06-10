import { useWizard } from "../helpers/hooks";
import { useFormContext } from "react-hook-form";

interface Props {
  textNext?: string;
  textPrevious?: string;
}

function BasicFooter({ textNext, textPrevious }: Props) {
  let {
    goToPreviousStep,
    isLoading,
    activeStep: {
      hidePrevious,
      disablePrevious,
      hideNext,
      disableNext,
      disableNextOnErrors,
    },
  } = useWizard();
  const {
    formState: { isValid },
    trigger,
  } = useFormContext();
  disableNext = isLoading || disableNext || (disableNextOnErrors && !isValid);

  return (
    <div className="navigation">
      <div
        className={
          "navigation-wrapper " +
          (hidePrevious ? "justify-end" : "justify-between")
        }
      >
        {/* 'Previous' button */}
        {!hidePrevious && (
          <button
            type="button"
            disabled={disablePrevious}
            onClick={goToPreviousStep}
          >
            {textPrevious || "Previous"}
          </button>
        )}
        {/* 'Next' button */}
        {!hideNext && (
          // Still possible to trigger submit even though button is disabled.
          // Main reason is to display validation errors.
          <div
            onClick={
              disableNext
                ? () => {
                    trigger();
                  }
                : undefined
            }
          >
            <button type="submit" disabled={disableNext}>
              {isLoading ? "Loading..." : textNext || "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicFooter;
