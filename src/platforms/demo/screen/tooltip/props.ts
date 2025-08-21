import type { PropRow } from "../../component/props.table";

export const tooltipProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The target element that triggers the tooltip.",
  },
  {
    name: "label",
    type: "string",
    required: true,
    description: "Text to be shown inside the tooltip.",
  },
  {
    name: "position",
    type: ["top", "bottom", "left", "right"],
    defaultValue: "top",
    description: "Controls where the tooltip appears relative to the target.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Size of the tooltip text and padding.",
  },
  {
    name: "variant",
    type: [
      "neutral",
      "primary",
      "secondary",
      "accent",
      "info",
      "success",
      "warning",
      "error",
    ],
    defaultValue: "neutral",
    description: "Sets the color scheme of the tooltip.",
  },
  {
    name: "className",
    type: "string",
    description: "Optional custom class name for the tooltip container.",
  },
];

export const exampleUsageCode = `
import { Button, Tooltip } from "@/components";

<Tooltip label="Save changes" position="top" variant="primary">
  <Button>Save</Button>
</Tooltip>
`.trim();
