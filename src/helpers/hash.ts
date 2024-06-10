import { StepConfig as Step } from "../types";

interface StepHash {
  [field: string]: Step;
}

export function buildHashSteps(steps: Step[]) {
  const hashes: StepHash = {};
  steps.forEach((step) => {
    const hash = step.id.replace(/[A-Z]/g, (match: string, offset: number) => {
      return (offset > 0 ? "-" : "") + match.toLowerCase();
    });
    hashes[hash] = step;
  });
  return hashes;
}

export function resolveHashStep(hashes: StepHash) {
  // Get hash and remove #
  const hash = window.location.hash.slice(1);
  return hashes[hash];
}

export function updateHash(hashes: StepHash, activeStep: Step) {
  const hash = Object.keys(hashes).find(
    (key) => hashes[key].id === activeStep.id,
  );
  window.location.hash = hash || window.location.hash;
}
