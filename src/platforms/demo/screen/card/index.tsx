import { Card } from "@/components";
import { PropsTable } from "../../component/props.table";
import {
  cardProps,
  cardMediaProps,
  cardHeaderProps,
  cardActionsProps,
  exampleUsageCode,
} from "./props";
import { CodeBlock } from "../../component/codeblock";

const CardExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Card</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Card component is a flexible container with support for media,
        title, actions, and content, styled using DaisyUI.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Card</h4>
        <PropsTable rows={cardProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Card.Media</h4>
        <PropsTable rows={cardMediaProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Card.Header</h4>
        <PropsTable rows={cardHeaderProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Card.Actions</h4>
        <PropsTable rows={cardActionsProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Card size="md" background="base" className="w-96">
          <Card.Media src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
          <Card.Body>
            <Card.Header title="Card Title" badge="NEW" />
            <p>
              This is a simple card example with media, content, and actions.
            </p>
            <Card.Actions>
              <button className="btn btn-primary btn-sm">Action</button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default CardExample;
