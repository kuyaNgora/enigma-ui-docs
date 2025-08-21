import { Toggle } from "@/components";
import { PropsTable } from "../../component/props.table";
import { toggleProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const ToggleExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Toggle</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Toggle component renders a stylized checkbox toggle, with options
        for size, variant color, shape type, and label positioning.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Toggle Props</h4>
        <PropsTable rows={toggleProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Toggle
          label="Enable notifications"
          variant="primary"
          size="sm"
          type="rounded"
          labelPosition="right"
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default ToggleExample;
