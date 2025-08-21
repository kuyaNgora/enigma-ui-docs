import type { PropRow } from "../../component/props.table";

export const toggleProps: PropRow[] = [
  {
    name: "label",
    type: "ReactNode",
    description: "Text or node to display next to the toggle switch.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the toggle switch.",
  },
  {
    name: "type",
    type: ["default", "rounded", "circle"],
    defaultValue: "default",
    description:
      "Defines the shape style of the toggle: square, rounded, or circle.",
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
    description: "Applies a theme color to the toggle.",
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
    name: "labelPosition",
    type: ["left", "right"],
    defaultValue: "right",
    description: "Position of the label relative to the toggle.",
  },
  {
    name: "[...rest]",
    type: "InputHTMLAttributes<HTMLInputElement>",
    description:
      "All other native input attributes like `checked`, `onChange`, etc.",
  },
];

export const exampleUsageCode = `
import { Toggle } from "@/components";

<Toggle
  label="Enable notifications"
  variant="success"
  size="sm"
  type="rounded"
/>
`.trim();
