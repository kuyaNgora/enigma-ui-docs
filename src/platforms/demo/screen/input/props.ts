export const inputProps = [
  {
    name: "id",
    type: "string",
    required: true,
    description: "ID attribute for the input element.",
  },
  {
    name: "label",
    type: "string",
    description: "Text label displayed above the input.",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "Marks the field as required (adds a `*` next to the label).",
  },
  {
    name: "error",
    type: "string",
    description: "Error message displayed below the input.",
  },
  {
    name: "type",
    type: ['"text"', '"password"', '"currency"', '"textarea"'],
    defaultValue: `"text"`,
    description:
      "Type of input. If `password`, it includes a show/hide toggle.",
  },
  {
    name: "size",
    type: ['"xs"', '"sm"', '"md"', '"lg"', '"xl"'],
    defaultValue: `"md"`,
    description: "Input size, mapped to the `input-{size}` class.",
  },
  {
    name: "variant",
    type: ['"neutral"', '"primary"', '"info"', '"success"', '"error"'],
    defaultValue: `"neutral"`,
    description:
      "Color variant for borders and focus, mapped to `input-{variant}`.",
  },
  {
    name: "prefix",
    type: "ReactNode",
    description:
      "Element (usually an icon) rendered on the left side of the input.",
  },
  {
    name: "suffix",
    type: "ReactNode",
    description:
      "Element (usually an icon or button) rendered on the right side of the input.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the input and applies muted styles if set to true.",
  },
  {
    name: "value",
    type: "string",
    description: "The current value of the controlled input.",
  },
  {
    name: "onChange",
    type: "(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void",
    description: "Callback function triggered when the input value changes.",
  },
];
