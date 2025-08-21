import type { PropRow } from "../../component/props.table";

export const menuProps: PropRow[] = [
  {
    name: "items",
    type: "MenuItem[]",
    required: true,
    description:
      "An array of menu items with optional nesting, badges, and states.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    defaultValue: "md",
    description: "Controls the visual size of menu items.",
  },
  {
    name: "horizontal",
    type: "boolean",
    defaultValue: "false",
    description: "Renders the menu in a horizontal layout.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class name to style the root menu container.",
  },
];

export const menuItemProps: PropRow[] = [
  {
    name: "label",
    type: "string",
    description: "Text to display in the menu item.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Icon displayed before the label.",
  },
  {
    name: "badge",
    type: "ReactNode",
    description: "Badge displayed after the label.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the menu item.",
  },
  {
    name: "active",
    type: "boolean",
    defaultValue: "false",
    description: "Marks the item as currently active.",
  },
  {
    name: "title",
    type: "boolean",
    defaultValue: "false",
    description: "Marks this item as a non-interactive section title.",
  },
  {
    name: "collapsible",
    type: "boolean",
    defaultValue: "false",
    description: "Whether children items are collapsible (nested submenu).",
  },
  {
    name: "children",
    type: "MenuItem[]",
    description: "Nested menu items if collapsible or grouped.",
  },
];

export const exampleUsageCode = `
import { Menu } from "@/components";

<Menu
  size="md"
  horizontal
  className="bg-base-200 rounded-box xl:menu-horizontal lg:min-w-max"
  items={[
    {
      label: "Solutions",
      icon: <IconFile />,
      badge: (
        <Badge variant="warning" size="xs" appearance="soft">
          NEW
        </Badge>
      ),
      children: [
        { label: "Design" },
        { label: "Development" },
        { label: "Hosting" },
        { label: "Domain register" },
      ],
    },
    {
      label: "Enterprise",
      children: [
        { label: "CRM software" },
        { label: "Marketing management" },
        { label: "Security" },
        { label: "Consulting" },
      ],
    },
    {
      label: "Products",
      children: [
        { label: "UI Kit" },
        { label: "WordPress themes" },
        { label: "WordPress plugins" },
        {
          label: "Open source",
          collapsible: true,
          badge: (
            <Badge variant="info" size="xs" appearance="soft">
              NEW
            </Badge>
          ),
          children: [
            { label: "Auth management system" },
            { label: "VScode theme" },
            { label: "Color picker app" },
          ],
        },
      ],
    },
    {
      label: "Company",
      children: [
        { label: "About us" },
        { label: "Contact us" },
        { label: "Privacy policy" },
        { label: "Press kit" },
      ],
    },
  ]}
/>
`.trim();
