import { Steps } from "@/components";
import { PropsTable } from "../../component/props.table";
import { stepsProps, stepItemProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { IconImage } from "@/assets/icons";

const StepsExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Steps</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Steps component displays a horizontal or vertical progress indicator
        with labeled steps, supporting icons, descriptions, and custom states.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Steps</h4>
        <PropsTable rows={stepsProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">StepItem</h4>
        <PropsTable rows={stepItemProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Steps
          steps={[
            {
              label: "Login",
              icon: <IconImage className="h-4 w-4 text-white" />,
            },
            { label: "Shipping" },
            { label: "Payment" },
            { label: "Done" },
          ]}
          current={0}
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default StepsExample;
