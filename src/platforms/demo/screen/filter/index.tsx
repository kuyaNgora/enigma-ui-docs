import { Filter } from "@/components";
import { PropsTable } from "../../component/props.table";
import { filterProps, filterOptionProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { useState } from "react";

const FilterExample = () => {
  const [selected, setSelected] = useState("");

  const options = [
    { label: "Svelte", value: "svelte" },
    { label: "Vue", value: "vue" },
    { label: "React", value: "react" },
  ];

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Filter</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Filter component provides a simple set of selectable options (like
        segmented control or pills) to filter content. You can enable a reset
        option using <code>showReset</code>, and control selection.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Filter Props</h4>
        <PropsTable rows={filterProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Filter Option</h4>
        <PropsTable rows={filterOptionProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Filter
          name="frameworks"
          options={options}
          selected={selected}
          onChange={setSelected}
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default FilterExample;
