import { Select } from "@/components";
import { PropsTable } from "../../component/props.table";
import { selectProps, selectOptionProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const SelectExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Select</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Select component renders a dropdown input using the native HTML
        select element. It supports themed variants, sizing, border styles,
        ghost appearance, and labels.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Select Props</h4>
        <PropsTable rows={selectProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Select Option</h4>
        <PropsTable rows={selectOptionProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Select
          label="Choose one"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry", disabled: true },
          ]}
          variant="primary"
          size="sm"
          bordered
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default SelectExample;
