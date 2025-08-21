import { Alert } from "@/components";
import { PropsTable } from "../../component/props.table";
import { alertProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { useState } from "react";

const AlertExample = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Alert</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Alert component provides contextual feedback messages for typical
        user interactions. It supports multiple variants, sizes, layouts, and
        dismissible behavior.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Alert</h4>
        <PropsTable rows={alertProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        {visible && (
          <Alert
            variant="success"
            title="Success"
            message="Your changes have been saved."
            dismissible
            onDismiss={() => setVisible(false)}
          />
        )}
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default AlertExample;
