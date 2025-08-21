import type { PropRow } from "../../component/props.table";

export const breadcrumbsProps: PropRow[] = [
  {
    name: "items",
    type: "BreadcrumbItem[]",
    required: true,
    description:
      "An array of breadcrumb items representing the navigation path.",
  },
  {
    name: "separator",
    type: ["string", "ReactNode"],
    defaultValue: '"/"',
    description:
      "Custom separator between items. Can be a string or React element.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class name for styling the breadcrumbs container.",
  },
];

export const breadcrumbItemProps: PropRow[] = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "Text label for the breadcrumb item.",
  },
  {
    name: "href",
    type: "string",
    description:
      "URL path for the breadcrumb item. If omitted, renders as plain text.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the breadcrumb item, rendering it as plain text.",
  },
];

export const exampleUsageCode = `
import { Breadcrumbs } from "@/components";

<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Shoes", disabled: true },
  ]}
/>
`.trim();
