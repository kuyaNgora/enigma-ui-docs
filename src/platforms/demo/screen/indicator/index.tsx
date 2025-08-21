import { Badge, Button, Indicator } from "@/components";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";
import { indicatorProps, exampleUsageCode } from "./props";

const IndicatorExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Indicator</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Indicator component overlays an indicator element (like a badge or
        dot) on top of its child. You can control its position, color, and
        content.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Indicator Props</h4>
        <PropsTable rows={indicatorProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Indicator
          indicator={
            <Badge size="sm" variant="primary">
              3
            </Badge>
          }
        >
          <Button>Inbox</Button>
        </Indicator>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default IndicatorExample;
