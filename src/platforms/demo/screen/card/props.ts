import type { PropRow } from "../../component/props.table";

export const cardProps: PropRow[] = [
  {
    name: "variant",
    type: ["default", "border", "dash", "image-full", "side"],
    defaultValue: "default",
    description: "Defines the visual style of the card.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    defaultValue: "md",
    description: "Sets the width of the card.",
  },
  {
    name: "background",
    type: ["base", "primary", "secondary", "accent"],
    defaultValue: "base",
    description: "Sets the background color of the card.",
  },
  {
    name: "textColor",
    type: ["default", "primary-content", "secondary-content"],
    defaultValue: "default",
    description: "Sets the text color within the card.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class names for additional styling.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Card content including Media, Header, Body, and Actions.",
  },
];

export const cardMediaProps: PropRow[] = [
  {
    name: "src",
    type: "string",
    required: true,
    description: "Image source URL.",
  },
  {
    name: "alt",
    type: "string",
    defaultValue: "",
    description: "Alternative text for the image.",
  },
  {
    name: "position",
    type: ["top", "bottom"],
    defaultValue: "top",
    description: "Controls media position in the card.",
  },
];

export const cardHeaderProps: PropRow[] = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Main heading/title of the card.",
  },
  {
    name: "badge",
    type: "string",
    description: "Optional badge shown next to the title.",
  },
  {
    name: "badgeVariant",
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
    defaultValue: "secondary",
    description: "Color variant of the badge if shown.",
  },
  {
    name: "badgeSize",
    type: ["xs", "sm", "md", "lg", "xl"],
    defaultValue: "sm",
    description: "Size of the badge.",
  },
  {
    name: "badgeAppearance",
    type: ["default", "outline", "dash", "soft", "ghost"],
    defaultValue: "default",
    description: "Appearance style of the badge.",
  },
];

export const cardActionsProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description:
      "Action elements like buttons, shown at the bottom of the card.",
  },
];

export const exampleUsageCode = `
import { Card } from "@/components";

<Card size="md" background="base" className="w-full">
  <Card.Media src="/example.jpg" />
  <Card.Body>
    <Card.Header title="Card Title" badge="NEW" />
    <p>This is a simple card example with media, content, and actions.</p>
    <Card.Actions>
      <button className="btn btn-primary btn-sm">Action</button>
    </Card.Actions>
  </Card.Body>
</Card>
`.trim();
