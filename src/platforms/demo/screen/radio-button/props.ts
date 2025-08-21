import type { PropRow } from "@/platforms/demo/component/props.table";

export const radioButtonsProps: PropRow[] = [
  {
    name: "options",
    type: "RadioOption[]",
    required: true,
    description:
      "An array of options for the radio buttons. Each option contains label, value, and optional icon/styling classes.",
  },
  {
    name: "value",
    type: "string",
    description: "The currently selected option's value.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    description: "Callback fired when a new option is selected.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the container.",
  },
];

export const radioOptionProps: PropRow[] = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "The text label for the radio option.",
  },
  {
    name: "value",
    type: "string",
    required: true,
    description: "The unique value for the option.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon displayed alongside the label.",
  },
  {
    name: "activeClass",
    type: "string",
    description:
      "Additional class applied when this option is selected (active).",
  },
  {
    name: "inactiveClass",
    type: "string",
    description:
      "Additional class applied when this option is not selected (inactive).",
  },
];

export const exampleRadioButtonsCode = `
import { useState } from "react";
import { RadioButtons } from "@/components";

export default function Example() {
  const [value, setValue] = useState("option1");

  return (
    <RadioButtons
      options={[
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ]}
      value={value}
      onChange={(v: string) => setValue(v)}
    />
  );
}
`.trim();
