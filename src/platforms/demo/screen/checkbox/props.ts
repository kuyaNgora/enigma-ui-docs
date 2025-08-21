import type { PropRow } from "../../component/props.table";

export const checkboxProps: PropRow[] = [
  {
    name: "label",
    type: "ReactNode",
    description: "Optional label displayed next to the checkbox.",
  },
  {
    name: "indeterminate",
    type: "boolean",
    defaultValue: "false",
    description: "Applies the indeterminate visual state.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the checkbox input.",
  },
  {
    name: "variant",
    type: [
      "default",
      "primary",
      "secondary",
      "accent",
      "info",
      "success",
      "warning",
      "error",
    ],
    defaultValue: "default",
    description: "Color theme applied to the checkbox.",
  },
  {
    name: "labelClassName",
    type: "string",
    description: "Additional class name applied to the label element.",
  },
  {
    name: "labelPosition",
    type: ["left", "right"],
    defaultValue: "right",
    description: "Position of the label relative to the checkbox.",
  },
  {
    name: "[...rest]",
    type: "InputHTMLAttributes<HTMLInputElement>",
    description:
      "You can pass any native input attributes (e.g., `checked`, `onChange`, `disabled`).",
  },
];

export const exampleUsageCode = `
import { Checkbox } from "@/components";

<Checkbox label="Left Label" labelPosition="left" />
<Checkbox label="Right Label" variant="primary" disabled />
`.trim();
