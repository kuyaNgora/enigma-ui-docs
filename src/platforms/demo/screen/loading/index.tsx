import { Loading } from "@/components";
import { PropsTable } from "../../component/props.table";
import { loadingProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const LoadingExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Loading</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Loading component displays an animated indicator to show loading
        state. You can customize its style, size, and position.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Loading</h4>
        <PropsTable rows={loadingProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <div className="flex items-center gap-4">
          <Loading className="text-primary" />
          <Loading variant="dots" size="sm" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default LoadingExample;
