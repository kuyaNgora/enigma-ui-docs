import type { PropRow } from "../../component/props.table";

export const stepsProps: PropRow[] = [
  {
    name: "steps",
    type: "StepItem[]",
    required: true,
    description: "Array of steps to display in the progress component.",
  },
  {
    name: "current",
    type: "number",
    defaultValue: "0",
    description: "Zero-based index indicating the currently active step.",
  },
  {
    name: "vertical",
    type: "boolean",
    defaultValue: "false",
    description: "Renders steps vertically instead of horizontally.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the steps.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class name to apply to the steps container.",
  },
];

export const stepItemProps: PropRow[] = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "Text shown for the step.",
  },
  {
    name: "description",
    type: "string",
    description: "Optional smaller text shown below the step label.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon shown inside the step circle.",
  },
  {
    name: "error",
    type: "boolean",
    defaultValue: "false",
    description: "Marks the step as errored (shows error style).",
  },
];

export const exampleUsageCode = `
import { Steps } from "@/components";

<Steps
    steps={[
        {
            label: "Login",
            icon: <IconImage className="h-4 w-4 text-white" />,
        },
        { label: "Shipping" },
        { label: "Payment" },
        { label: "Done" },
    ]}
    current={0}
/>
`.trim();
