import { useState } from "react";
import { dropdownProps, dropdownItemProps, exampleUsageCode } from "./props";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";
import { Dropdown } from "@/components";

const DropdownExample = () => {
  const [selected, setSelected] = useState("apple");

  return (
    <div className="p-4 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Dropdown</h2>
        <p className="text-sm text-gray-500">
          A flexible dropdown component with support for position, controlled
          open, and item selection.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dropdown</h4>
        <PropsTable rows={dropdownProps} />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Dropdown.Item</h4>
        <PropsTable rows={dropdownItemProps} />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Usage Example</h4>
        <Dropdown
          value={selected}
          onChange={setSelected}
          trigger={<button className="btn">Select Fruit {selected}</button>}
        >
          {({ select, selected }) => (
            <>
              <Dropdown.Item
                value="apple"
                selected={selected}
                onSelect={select}
              >
                Apple
              </Dropdown.Item>
              <Dropdown.Item
                value="banana"
                selected={selected}
                onSelect={select}
              >
                Banana
              </Dropdown.Item>
              <Dropdown.Item
                value="cherry"
                selected={selected}
                onSelect={select}
              >
                Cherry
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default DropdownExample;
