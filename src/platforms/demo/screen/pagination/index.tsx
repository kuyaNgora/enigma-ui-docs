import { Pagination } from "@/components";
import { PropsTable } from "../../component/props.table";
import { paginationProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const PaginationExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Pagination</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Pagination component allows users to navigate between pages of
        content. It supports custom sizes, styling, and controlled navigation
        via callbacks.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Pagination</h4>
        <PropsTable rows={paginationProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Pagination
          currentPage={2}
          totalPages={5}
          onChange={(page: number) => console.log("Go to page", page)}
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default PaginationExample;
