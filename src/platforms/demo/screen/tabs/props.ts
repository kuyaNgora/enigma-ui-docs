import type { PropRow } from "../../component/props.table";

export const tabsProps: PropRow[] = [
  {
    name: "items",
    type: "TabsItem[]",
    required: true,
    description:
      "Array of tab definitions with labels, content, and optional indicators.",
  },
  {
    name: "value",
    type: "string | number",
    description: "Current selected tab value.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    description: "Callback when tab selection changes.",
  },
  {
    name: "variant",
    type: ["default", "boxed", "bordered", "lift"],
    defaultValue: "default",
    description: "Visual style variant of the tabs.",
  },
  {
    name: "position",
    type: ["top", "bottom"],
    defaultValue: "top",
    description: "Position of the tab navigation relative to content.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Size of the tab buttons.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class name for the outer wrapper.",
  },
  {
    name: "tabClass",
    type: "string",
    description: "Class name applied to each individual tab.",
  },
  {
    name: "contentClass",
    type: "string",
    description: "Class name applied to the content container.",
  },
  {
    name: "activeClass",
    type: "string",
    description: "Class name applied to the currently active tab.",
  },
];

export const tabsItemProps: PropRow[] = [
  {
    name: "label",
    type: "ReactNode | string",
    required: true,
    description: "The label shown on the tab.",
  },
  {
    name: "value",
    type: "string",
    required: true,
    description: "The unique value used to identify the tab.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon displayed with the label.",
  },
  {
    name: "content",
    type: "ReactNode | string",
    required: true,
    description: "Content shown when the tab is selected.",
  },
  {
    name: "indicator",
    type: "ReactNode | string",
    description: "Badge or dot shown as an indicator on the tab.",
  },
  {
    name: "indicatorPosition",
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
    description: "Placement of the indicator relative to the tab.",
  },
];

export const exampleUsageCode = `
import { Tabs } from "@/components";

const [tab, setTab] = useState("profile");

const items: TabsItem[] = [
  {
    label: "Home",
    value: "home",
    content: "Home Content",
    indicator: (
      <Badge size="xs" variant="warning">
        3
      </Badge>
    ),
    indicatorPosition: "top-start",
  },
  {
    label: "Profile",
    value: "profile",
    content: <p>Profile content</p>,
  },
  {
    label: "Settings",
    value: "settings",
    content: "Settings Content",
  },
];


<Tabs value={tab} onChange={setTab} items={items} variant="lift" />
`.trim();
