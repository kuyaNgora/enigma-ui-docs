import { Divider } from "@/components";
import { PropsTable } from "../../component/props.table";
import { dividerProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const DividerExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Divider</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Divider component creates visual separation between content. It
        supports horizontal or vertical orientation, custom placement, and
        themed variants.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Divider Props</h4>
        <PropsTable rows={dividerProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Divider variant="primary">OR</Divider>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default DividerExample;
