import type { PropRow } from "../../component/props.table";

export const guideProps: PropRow[] = [
  {
    name: "steps",
    type: "GuideStep[]",
    required: true,
    description: "List of steps to display in the guided tour.",
  },
  {
    name: "current",
    type: "number",
    required: true,
    description: "Current step index in the guide flow.",
  },
  {
    name: "onNext",
    type: "() => void",
    description: "Callback triggered when the user clicks next.",
  },
  {
    name: "onPrev",
    type: "() => void",
    description: "Callback triggered when the user clicks previous.",
  },
  {
    name: "onClose",
    type: "() => void",
    description: "Callback triggered when the guide is closed.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class name for the guide container.",
  },
];

export const guideStepProps: PropRow[] = [
  {
    name: "title",
    type: "string",
    description: "Optional title displayed at the top of the step tooltip.",
  },
  {
    name: "content",
    type: "ReactNode",
    required: true,
    description: "Main content of the guide tooltip for this step.",
  },
  {
    name: "targetId",
    type: "string",
    required: true,
    description: "ID of the element this step points to.",
  },
  {
    name: "placement",
    type: ["top", "right", "bottom", "left"],
    defaultValue: "bottom",
    description: "Position of the tooltip relative to the target element.",
  },
];

export const exampleUsageCode = `
import { Guide } from "@/components";

<Guide
  current={0}
  steps={[
    {
      title: "Start here",
      content: "This is your dashboard.",
      targetId: "step-dashboard",
      placement: "bottom",
    },
  ]}
/>
`.trim();
