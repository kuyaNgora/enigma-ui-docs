import type { PropRow } from "../../component/props.table";

export const loadingProps: PropRow[] = [
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the size of the loading animation.",
  },
  {
    name: "variant",
    type: ["spinner", "dots", "ring", "ball", "bars", "infinity"],
    defaultValue: "spinner",
    description: "Sets the animation style of the loading indicator.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional custom class names for the loading container.",
  },
  {
    name: "center",
    type: "boolean",
    defaultValue: "false",
    description: "Centers the loader in its container with flex utilities.",
  },
];

export const exampleUsageCode = `
import { Loading } from "@/components";

<div className="flex items-center gap-4">
  <Loading className="text-primary" />
  <Loading variant="dots" size="sm" />
</div>
`.trim();
