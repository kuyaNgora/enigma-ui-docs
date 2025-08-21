import { Badge, Tabs, type TabsItem } from "@/components";
import { PropsTable } from "../../component/props.table";
import { tabsProps, tabsItemProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { useState } from "react";

const TabsExample = () => {
  const [tab, setTab] = useState("profile");

  const items: TabsItem[] = [
    {
      label: "Home",
      value: "home",
      content: "Home Content",
      indicator: (
        <Badge size="xs" variant="warning">
          3
        </Badge>
      ),
      indicatorPosition: "top-start",
    },
    {
      label: "Profile",
      value: "profile",
      content: <p>Profile content</p>,
    },
    {
      label: "Settings",
      value: "settings",
      content: "Settings Content",
    },
  ];
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Tabs</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Tabs component allows users to switch between multiple views or
        content sections. Supports icon, string or JSX content, variants, and
        layout control.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Tabs</h4>
        <PropsTable rows={tabsProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">TabsItem</h4>
        <PropsTable rows={tabsItemProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Tabs value={tab} onChange={setTab} items={items} variant="lift" />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default TabsExample;
