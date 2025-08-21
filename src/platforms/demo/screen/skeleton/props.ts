import type { PropRow } from "../../component/props.table";

export const skeletonProps: PropRow[] = [
  {
    name: "variant",
    type: ["text", "circle", "rectangle"],
    defaultValue: "text",
    description: "Defines the shape of the skeleton element.",
  },
  {
    name: "count",
    type: "number",
    defaultValue: "1",
    description: "Number of skeleton blocks to render.",
  },
  {
    name: "animated",
    type: "boolean",
    defaultValue: "false",
    description: "Adds animation shimmer effect when true.",
  },
  {
    name: "width",
    type: ["number", "string"],
    description:
      "Width of the skeleton. Can be a pixel value (e.g. `200`) or Tailwind class (e.g. `'w-full'`, `'w-40'`).",
  },
  {
    name: "height",
    type: ["number", "string"],
    description:
      "Height of the skeleton. Can be a pixel value or Tailwind class like `'h-6'`, `'h-full'`.",
  },
  {
    name: "rounded",
    type: "boolean",
    defaultValue: "false",
    description: "Applies rounded corners to the skeleton.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class name for styling the skeleton wrapper.",
  },
];

export const exampleUsageCode = `
import { Skeleton } from "@/components";

<Skeleton
  variant="text"
  count={3}
  animated
  rounded
  width="100%"
/>
`.trim();
