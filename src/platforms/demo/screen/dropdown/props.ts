import type { PropRow } from "../../component/props.table";

export const dropdownProps: PropRow[] = [
  {
    name: "value",
    type: "string",
    description: "The selected value. Used to mark item as active.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    description: "Callback when an item is selected.",
  },
  {
    name: "position",
    type: [
      '"start"',
      '"center"',
      '"end"',
      '"top"',
      '"bottom"',
      '"left"',
      '"right"',
    ],
    defaultValue: `"end"`,
    description: "Dropdown menu position relative to the trigger.",
  },
  {
    name: "trigger",
    type: "ReactNode",
    required: true,
    description: "Element that triggers the dropdown when clicked.",
  },
  {
    name: "children",
    type: "ReactNode | (props: { select: (value: string) => void; selected?: string }) => ReactNode",
    required: true,
    description: "Dropdown content. You can use a function for more control.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the dropdown container.",
  },
  {
    name: "open",
    type: "boolean",
    description: "Controls the dropdown visibility (controlled mode).",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback triggered when dropdown open state changes.",
  },
];

export const dropdownItemProps: PropRow[] = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "The value of the item. Passed to `onSelect`.",
  },
  {
    name: "selected",
    type: "string",
    description: "Currently selected value. Used for styling active item.",
  },
  {
    name: "onSelect",
    type: "(value: string) => void",
    description: "Callback invoked when item is clicked.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content of the dropdown item.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional classes for the item.",
  },
];

export const exampleUsageCode = `
import { useState } from "react";
import { Dropdown } from "@/components";

const Example = () => {
  const [selected, setSelected] = useState("apple");

  return (
    <Dropdown
      value={selected}
      onChange={setSelected}
      position="bottom"
      trigger={<button className="btn">Select Fruit</button>}
    >
      {({ select, selected }) => (
        <>
          <Dropdown.Item value="apple" selected={selected} onSelect={select}>
            Apple
          </Dropdown.Item>
          <DropdownItem value="banana" selected={selected} onSelect={select}>
            Banana
          </Dropdown.Item>
          <DropdownItem value="cherry" selected={selected} onSelect={select}>
            Cherry
          </Dropdown.Item>
        </>
      )}
    </Dropdown>
  );
};
`.trim();
