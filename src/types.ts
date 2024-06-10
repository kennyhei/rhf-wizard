import "vite/client";

export interface Values<K = any> {
  [field: string]: K;
}

export interface WizardValues {
  [stepId: string]: Values;
}

export interface StepConfig {
  /**
   * Unique ID for step component. Used for two purposes:
   * 1. Serves as a key when retrieving inputted form values from `useWizard`.
   *
   * @example
   * ```jsx
   * const steps = [{ id: 'Step1', component: <Step1 />, initialValues: { name: '' } }]
   * ...
   * const { values } = useWizard()
   * console.log(values.Step1.name)
   * ```
   *
   * 2. If `Wizard.enableHash` is `true`, ID is converted to URL-friendly hash.
   */
  readonly id: string;
  /** Component used for rendering step content. */
  readonly component?: React.ReactElement;
  /** Initial values of the step's form. */
  initialValues?: {
    [field: string]: any;
  };
  /**
   * Submits step's form when 'onchange' event is triggered for any field.
   * @default false
   */
  submitOnChange?: boolean;
  /**
   * Indicates whether to hide submit button.
   * @default false
   */
  hideNext?: boolean;
  /**
   * Indicates whether to hide "Previous" button.
   * @default false
   */
  hidePrevious?: boolean;
  /**
   * Indicates whether to disable submit button.
   * @default false
   */
  disableNext?: boolean;
  /** Indicates whether to disable submit button if form has errors.
   * @default false
   */
  disableNextOnErrors?: boolean;
  /** Indicates whether to disable "Previous" button.
   * @default false
   */
  disablePrevious?: boolean;
  /**
   * Remembers inputted values in current step if user decides
   * to navigate back to previous step without submitting the form.
   * @default true
   */
  keepValuesOnPrevious?: boolean;
  /**
   * Function that returns boolean telling whether the step should be skipped or not.
   *
   * @param allValues Object containing all form field values from previous steps
   * @param direction Number. Indicates whether we came to this step by pressing "Previous" (-1) or "Next" (1)
   * @returns true if step should be skipped, false otherwise
   */
  shouldSkip?: (allValues: WizardValues, direction: number) => boolean;
  /**
   * Custom submit handler that's called when form is successfully submitted.
   *
   * @param stepValues Form field values inputted in current step
   * @param allValues Object containing all form field values from previous steps
   * @param actions Includes Formik helper functions
   * @returns stepValues
   */
  onSubmit?: (stepValues: Values, allValues: WizardValues) => Values;
  /**
   * Validation function. Must return an error object where that object's keys map to corresponding value.
   *
   * @param stepValues Form field values inputted in current step
   * @param allValues Object containing all form field values from previous steps
   * @returns Object where keys represent field and value represents error message. Return nothing if there are no errors.
   */
  validate?: (stepValues: Values, allValues: WizardValues) => Values<string>;
  /** A Yup schema or a function that returns a Yup schema. */
  validationSchema?: any;
  /**
   * Tells Formik to validate the form on each input's onBlur event.
   * @default true
   */
  validateOnBlur?: boolean;
  /**
   * Tells Formik to validate the form on each input's onChange event.
   * @default true
   */
  validateOnChange?: boolean;
  // Allow extra attributes defined by user
  [field: string]: any;
}

export interface WizardProps {
  /** List of step objects. */
  steps: StepConfig[];
  /**
   * Function that is called when last step is submitted.
   *
   * @param values Object containing all form field values from previous steps
   */
  onCompleted?: (values: Values) => void;
  /**
   * Function that is called when step is changed to another one.
   *
   * @param fromStep Current step object when function was called
   * @param toStep Proceeding step object when function was called
   * @param allValues Object containing all form field values from previous steps
   */
  onStepChanged?: (
    fromStep: StepConfig,
    toStep: StepConfig,
    allValues: WizardValues,
  ) => void;
  /** Persists the current step in the URL (hash). */
  enableHash?: boolean;
  /**
   * Optional header that is shown above the active step.
   * @default false
   */
  header?: React.ReactElement;
  /** Optional wrapper that is wrapped around the active step component. */
  wrapper?: React.ReactElement;
  /** Optional footer that is shown below the active step. */
  footer?: React.ReactElement;
}

export interface WizardContextValues {
  /** Object containing all form field values from previous steps. */
  values: WizardValues;
  /** Function for updating `Wizard.values`. */
  setValues: (newValues: WizardValues) => void;
  /** Function for updating the value of `Wizard.isLoading`. */
  setIsLoading: (truthy: boolean) => void;
  /** Go to previous step. */
  goToPreviousStep: () => void;
  /** Go to next step. */
  goToNextStep: () => void;
  /** Go to step specified by index. */
  goToStep: (index: number) => void;
  /** Function for updating `activeStep`'s `[key]` attribute with `value`.
   *
   * @example
   * ```jsx
   * const { updateStep } = useWizard()
   * updateStep('hideNext', false)
   * ```
   */
  updateStep: (key: string, value: any) => void;
  /** Currently active step's config object. */
  activeStep: StepConfig;
  /** Current index, numbering starts from 1. */
  stepNumber: number;
  /** Total number of steps. */
  totalSteps: number;
  isLoading: boolean;
  /** Is currently active step first step. */
  isFirstStep: boolean;
  /** Is currently active step last step. */
  isLastStep: boolean;
}
