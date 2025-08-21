import { Accordion } from "@/components";
import { PropsTable } from "../../component/props.table";
import { accordionProps, accordionItemProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const AccordionExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Accordion</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Accordion component allows you to show and hide content sections
        with expandable items.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Accordion</h4>
        <PropsTable rows={accordionProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Accordion.Item </h4>
        <PropsTable rows={accordionItemProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Accordion join>
          <Accordion.Item title="Section 1" defaultOpen>
            Content for section 1
          </Accordion.Item>
          <Accordion.Item title="Section 2">
            Content for section 2
          </Accordion.Item>
          <Accordion.Item title="Section 3">
            Content for section 3
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default AccordionExample;
