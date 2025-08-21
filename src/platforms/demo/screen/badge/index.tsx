import { Badge } from "@/components/ui";
import { PropsTable } from "../../component/props.table";
import { badgeProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const BadgeExample = () => {
  return (
    <div className="p-4 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Badge</h2>
        <p className="text-sm text-gray-500 mb-4">
          Badge is a small UI element used to display status, labels, or
          indicators.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Props</h4>
        <PropsTable rows={badgeProps} />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Usage Example</h4>
        <div className="flex flex-wrap gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success" size="lg">
            Success
          </Badge>
          <Badge variant="info" appearance="outline">
            Info
          </Badge>
          <Badge variant="warning" appearance="dash">
            Warning
          </Badge>
          <Badge variant="error" size="sm" appearance="ghost">
            Error
          </Badge>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default BadgeExample;
