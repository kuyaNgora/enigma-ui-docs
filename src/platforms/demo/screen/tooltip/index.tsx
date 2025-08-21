import { Button, Tooltip } from "@/components";
import { tooltipProps, exampleUsageCode } from "./props";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";

const TooltipExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Tooltip</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Tooltip component provides informative text when users hover or
        focus on an element. Supports custom position, size, and visual variant.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Tooltip</h4>
        <PropsTable rows={tooltipProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Tooltip label="Save changes" position="right" variant="primary">
          <Button>Save</Button>
        </Tooltip>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default TooltipExample;
