import { Checkbox } from "@/components";
import { PropsTable } from "../../component/props.table";
import { checkboxProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const CheckboxExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Checkbox</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Checkbox component lets users select one or more options. It
        supports label, size, color variants, and indeterminate state.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Checkbox</h4>
        <PropsTable rows={checkboxProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Checkbox label="Left Label" labelPosition="left" />
        <Checkbox label="Right Label" variant="primary" disabled />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default CheckboxExample;
