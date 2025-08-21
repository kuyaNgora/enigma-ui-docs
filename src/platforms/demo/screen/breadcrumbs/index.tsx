import { Breadcrumbs } from "@/components";
import { PropsTable } from "../../component/props.table";
import {
  breadcrumbsProps,
  breadcrumbItemProps,
  exampleUsageCode,
} from "./props";
import { CodeBlock } from "../../component/codeblock";

const BreadcrumbsExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Breadcrumbs</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Breadcrumbs component displays navigation hierarchy with optional
        icons, links, and separators. Useful for indicating current page
        context.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Breadcrumbs</h4>
        <PropsTable rows={breadcrumbsProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">BreadcrumbItem</h4>
        <PropsTable rows={breadcrumbItemProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes", disabled: true },
          ]}
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default BreadcrumbsExample;
