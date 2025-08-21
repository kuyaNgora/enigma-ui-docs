import type { PropRow } from "../../component/props.table";

export const selectProps: PropRow[] = [
  {
    name: "options",
    type: "SelectOption[]",
    required: true,
    description: "Array of selectable items for the dropdown.",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "Optional label displayed above the select element.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the select input.",
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
    description: "Applies a theme color to the select input.",
  },
  {
    name: "bordered",
    type: "boolean",
    defaultValue: "false",
    description: "Adds border styling to the select.",
  },
  {
    name: "ghost",
    type: "boolean",
    defaultValue: "false",
    description: "Applies a ghost (transparent) style to the select.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the select input.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class name for the select element.",
  },
  {
    name: "labelClassName",
    type: "string",
    description: "Additional class name for the label.",
  },
  {
    name: "[...rest]",
    type: "SelectHTMLAttributes<HTMLSelectElement>",
    description:
      "All other native select attributes like `value`, `onChange`, `multiple`, etc.",
  },
];

export const selectOptionProps: PropRow[] = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "Text displayed in the dropdown menu.",
  },
  {
    name: "value",
    type: "string | number",
    required: true,
    description: "Internal value of the option used in selection logic.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the option from being selected.",
  },
];

export const exampleUsageCode = `
import { Select } from "@/components";

<Select
  label="Choose one"
  options={[
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry", disabled: true },
  ]}
  variant="primary"
  size="sm"
  bordered
/>
`.trim();
