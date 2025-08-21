import { Button } from "@/components";
import { PropsTable } from "../../component/props.table";
import { buttonProps, buttonUsageExample } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { FaTrash } from "react-icons/fa";

const ButtonExample = () => {
  return (
    <div className="p-4 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Button</h2>
        <p className="text-sm text-gray-500">
          The Button component provides flexible styling and behavior for user
          interactions, including size, variant, loading state, and shape.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Props</h4>
        <PropsTable rows={buttonProps} />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Usage Example</h4>
        <div className="space-x-2 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary" onClick={() => alert("Clicked!")}>
              Click Me
            </Button>

            <Button variant="success" size="lg" isLoading>
              Saving...
            </Button>

            <Button variant="warning" shape="block">
              Block Button
            </Button>

            <Button variant="info" styleType="outline">
              Outline Info
            </Button>

            <Button variant="error" shape="circle">
              <FaTrash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={buttonUsageExample} />
      </div>
    </div>
  );
};

export default ButtonExample;
