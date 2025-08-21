import type { PropRow } from "../../component/props.table";

export const drawerProps: PropRow[] = [
  {
    name: "open",
    type: "boolean",
    required: true,
    description: "Controls whether the drawer is visible or hidden.",
  },
  {
    name: "onClose",
    type: "() => void",
    required: true,
    description:
      "Function to call when the drawer should be closed (e.g. outside click or ESC key).",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content inside the drawer.",
  },
  {
    name: "position",
    type: ["left", "right"],
    defaultValue: "right",
    description: "Where the drawer should slide in from.",
  },
  {
    name: "closeOnOutsideClick",
    type: "boolean",
    defaultValue: "true",
    description: "Whether clicking outside the drawer will trigger onClose.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class names for custom styling.",
  },
];

export const exampleDrawerCode = `
import { Drawer, useOnwardUI } from "@/components";

const { openDrawer, closeDrawer } = useOnwardUI();

openDrawer({
  id: "settings",
  content: (
    <Drawer open={true} onClose={() => closeDrawer("settings")}>
      <p>This is your drawer content</p>
    </Drawer>
  ),
});
`.trim();
