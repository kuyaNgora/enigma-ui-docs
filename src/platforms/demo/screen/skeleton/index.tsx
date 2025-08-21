import { Skeleton } from "@/components";
import { PropsTable } from "../../component/props.table";
import { skeletonProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const SkeletonExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Skeleton</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Skeleton component is used to display a placeholder loading UI while
        content is being loaded. It supports shape, count, animation, and custom
        sizing.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Skeleton</h4>
        <PropsTable rows={skeletonProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Skeleton variant="text" count={3} animated rounded width="100%" />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default SkeletonExample;
