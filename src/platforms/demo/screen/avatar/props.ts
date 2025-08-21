import type { PropRow } from "../../component/props.table";

export const avatarProps: PropRow[] = [
  {
    name: "src",
    type: "string",
    description: "Image source URL for the avatar.",
  },
  {
    name: "alt",
    type: "string",
    description: "Alternative text for the avatar image.",
  },
  {
    name: "placeholder",
    type: "boolean",
    defaultValue: "false",
    description:
      "Displays a text-based avatar if `true`, using the children as content.",
  },
  {
    name: "mask",
    type: ["default", "heart", "squircle", "hexagon", "circle"],
    defaultValue: `"default"`,
    description: "Shape mask applied to the avatar.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    defaultValue: `"md"`,
    description: "Size of the avatar, determines width and height.",
  },
  {
    name: "status",
    type: ["none", "online", "offline"],
    defaultValue: `"none"`,
    description: "Shows online/offline indicator on avatar.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional custom classes for the avatar container.",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Used as text inside the avatar when `placeholder` is true.",
  },
];

export const avatarGroupProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "List of Avatar components to be grouped together.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class for the avatar group container.",
  },
];

export const exampleUsageCode = `
import { useState } from "react";
import { Avatar } from "@/components";

const Example = () => {
  return (
    <div>
      <Avatar src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" size="sm" />

      <Avatar.Group>
        <Avatar src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" size="sm" />
        <Avatar src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" size="sm" />
        <Avatar src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" size="sm" />
        <Avatar placeholder size="sm">JD</Avatar>
      </Avatar.Group>
    </div>
  );
};
`.trim();
