import { useState } from "react";
import { useWizard } from "@/index";

function StepFinal() {
  const { values, updateStep } = useWizard();
  const [truthy, setTruthy] = useState(true);

  function toggle() {
    const res = !truthy;
    setTruthy(res);
    updateStep("hideNext", res);
  }

  let data = {};
  Object.keys(values).forEach((stepId) => {
    data = { ...data, ...values[stepId] };
  });

  return (
    <div className="prose prose-neutral max-w-none">
      <h2>Congratulations!</h2>
      <div className="flex flex-wrap gap-4 justify-between">
        <p className="!mt-0">
          You did it <b>{values.Username.username}</b>! 🎉
          <br />
          Here's your input:
        </p>
        <button className="btn" onClick={toggle} type="button">
          Toggle hideNext
        </button>
      </div>
      <pre className="mt-0 text-sm sm:text-base">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default StepFinal;
