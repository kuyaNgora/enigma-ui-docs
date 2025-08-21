import type { PropRow } from "../../component/props.table";

export const indicatorProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The base content that the indicator will be attached to.",
  },
  {
    name: "indicator",
    type: "ReactNode",
    description: "Element to display as the indicator (e.g. badge, dot).",
  },
  {
    name: "position",
    type: [
      "top-start",
      "top-center",
      "top-end",
      "middle-start",
      "middle-center",
      "middle-end",
      "bottom-start",
      "bottom-center",
      "bottom-end",
    ],
    defaultValue: "top-end",
    description: "Position of the indicator relative to the child content.",
  },
  {
    name: "color",
    type: "string",
    description:
      "Tailwind color class applied to the indicator (e.g. `bg-red-500`).",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class name for the indicator wrapper.",
  },
];

export const exampleUsageCode = `
import { Indicator, Badge, Button } from "@/components";

<Indicator
    indicator={
        <Badge size="sm" variant="primary">
            3
        </Badge>
    }
    position="top-end"
>
    <Button>Inbox</Button>
</Indicator>
`.trim();
