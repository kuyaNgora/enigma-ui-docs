import type { PropRow } from "../../component/props.table";

export const badgeProps: PropRow[] = [
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
    description: "Color variant of the badge.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    defaultValue: "md",
    description:
      "Badge size, mapped to Tailwind classes like `badge-sm`, `badge-xl`.",
  },
  {
    name: "apperance",
    type: ["default", "outline", "dash", "soft", "ghost"],
    defaultValue: "default",
    description: "Style of the badge border and background.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "The content to be rendered inside the badge.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional custom class names to apply.",
  },
];

export const exampleUsageCode = `
import { useState } from "react";
import { Badge } from "@/components";

const Example = () => {

  return (
    <div>
      <Badge variant="primary">Primary</Badge>

      <Badge variant="success" size="lg">
        Success
      </Badge>

      <Badge variant="info" style="outline">
        Info
      </Badge>

      <Badge variant="warning" style="dash">
        Warning
      </Badge>

      <Badge variant="error" size="sm" style="ghost">
        Error
      </Badge>
    </div>
  );
};
`.trim();
