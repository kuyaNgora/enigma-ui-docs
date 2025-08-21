import type { PropRow } from "../../component/props.table";

export const fileInputProps: PropRow[] = [
  {
    name: "label",
    type: "ReactNode",
    description: "Optional label to be displayed beside the file input.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the file input.",
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
    description: "Applies the selected variant theme to the file input.",
  },
  {
    name: "bordered",
    type: "boolean",
    defaultValue: "false",
    description: "Adds a border around the file input.",
  },
  {
    name: "ghost",
    type: "boolean",
    defaultValue: "false",
    description: "Applies ghost style (transparent background with border).",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the file input.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class name for the wrapper or input.",
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
      "Accepts all standard input attributes such as `onChange`, `accept`, etc.",
  },
];

export const exampleUsageCode = `
import { FileInput } from "@/components";

<FileInput
  label="Upload your file"
  color="primary"
  size="md"
  bordered
/>
`.trim();
