import type { PropRow } from "../../component/props.table";

export const radioProps: PropRow[] = [
  {
    name: "label",
    type: "ReactNode",
    description: "Label displayed next to the radio input.",
  },
  {
    name: "variant",
    type: [
      "primary",
      "secondary",
      "accent",
      "neutral",
      "info",
      "success",
      "warning",
      "error",
    ],
    defaultValue: "neutral",
    description: "Applies theme color to the radio input.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the radio button.",
  },
  {
    name: "labelPosition",
    type: ["left", "right"],
    defaultValue: "right",
    description: "Position of the label relative to the radio input.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class name for the input element.",
  },
  {
    name: "labelClassName",
    type: "string",
    description: "Additional class name for the label element.",
  },
  {
    name: "[...rest]",
    type: "InputHTMLAttributes<HTMLInputElement>",
    description:
      "Accepts all standard input props such as `name`, `value`, `checked`, `onChange`, etc.",
  },
];

export const exampleUsageCode = `
import { Radio } from "@/components";

<div className="space-x-4 flex place-items-center">
    <Radio name="plan" value="basic" label="Basic" variant="primary" />
    <Radio
        name="plan"
        value="pro"
        label="Pro"
        variant="success"
        labelPosition="right"
        defaultChecked
    />
    <Radio
        name="plan"
        value="enterprise"
        label="Enterprise"
        variant="error"
    />
</div>
`.trim();
