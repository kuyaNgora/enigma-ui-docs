import { Radio } from "@/components";
import { PropsTable } from "../../component/props.table";
import { radioProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const RadioExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Radio</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Radio component renders a styled radio button with support for
        color, size, label position, and other native input attributes.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Radio Props</h4>
        <PropsTable rows={radioProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <div className="space-x-4 flex place-items-center">
          <Radio name="plan" value="basic" label="Basic" variant="primary" />
          <Radio
            name="plan"
            value="pro"
            label="Pro"
            variant="success"
            labelPosition="right"
            defaultChecked
          />
          <Radio
            name="plan"
            value="enterprise"
            label="Enterprise"
            variant="error"
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default RadioExample;
