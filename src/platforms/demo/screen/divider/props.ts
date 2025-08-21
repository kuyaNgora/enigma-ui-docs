import type { PropRow } from "../../component/props.table";

export const dividerProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Optional content to display inside the divider.",
  },
  {
    name: "direction",
    type: ["horizontal", "vertical"],
    defaultValue: "horizontal",
    description: "Direction of the divider line.",
  },
  {
    name: "placement",
    type: ["start", "end", "default"],
    defaultValue: "default",
    description: "Placement of the divider content relative to the line.",
  },
  {
    name: "variant",
    type: [
      "neutral",
      "primary",
      "secondary",
      "accent",
      "success",
      "warning",
      "info",
      "error",
    ],
    defaultValue: "neutral",
    description: "Applies a color theme to the divider.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional custom class names for the divider element.",
  },
];

export const exampleUsageCode = `
import { Divider } from "@/components";

<Divider variant="primary">
  or
</Divider>
`.trim();
