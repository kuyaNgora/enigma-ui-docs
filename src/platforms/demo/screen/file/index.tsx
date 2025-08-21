import { FileInput } from "@/components";
import { PropsTable } from "../../component/props.table";
import { fileInputProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const FileInputExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">FileInput</h2>
      <p className="text-sm text-gray-500 mb-6">
        The FileInput component allows users to upload files from their device.
        Supports custom label, color, size, border, ghost style, and all native
        input props.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">File Input</h4>
        <PropsTable rows={fileInputProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <FileInput
          label="Upload your file"
          variant="primary"
          bordered
          onChange={(v) => console.log(v.target.files)}
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default FileInputExample;
