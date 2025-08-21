import { showToastProps, showToastUsageExample } from "./props";
import { useEnigmaUI } from "@/components";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";

const ToastExample = () => {
  const { showToast } = useEnigmaUI();

  const showSuccess = () => {
    showToast({
      message: "Data saved successfully!",
      type: "success",
      position: "top-end",
      duration: 3000,
    });
  };

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Toast</h2>
      <p className="text-sm text-gray-500 mb-6">
        Toasts are lightweight notifications that provide brief messages about
        app processes. They appear temporarily and automatically disappear after
        a few seconds.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">showToast Options</h4>
        <p className="text-sm text-gray-500 mb-6">
          The <code>showToast</code> function allows you to display toasts with
          customizable message, type, position, and duration.
        </p>
        <PropsTable rows={showToastProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>

        <button className="btn btn-success" onClick={showSuccess}>
          Show Success Toast
        </button>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={showToastUsageExample} />
      </div>
    </div>
  );
};

export default ToastExample;
