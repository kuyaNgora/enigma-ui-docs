import { Badge, Menu } from "@/components";
import { PropsTable } from "../../component/props.table";
import { menuProps, menuItemProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { IconFolder } from "@/assets/icons";

const MenuExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Menu component is a flexible list-based navigation container. It
        supports titles, groups, icons, badges, nested items, and interaction
        states.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Menu</h4>
        <PropsTable rows={menuProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">MenuItem</h4>
        <PropsTable rows={menuItemProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>

        <Menu
          size="sm"
          horizontal
          className="bg-base-200 rounded-box xl:menu-horizontal lg:min-w-max"
          items={[
            {
              label: "Solutions",
              title: true,
              children: [
                { label: "Design" },
                { label: "Development" },
                { label: "Hosting" },
                { label: "Domain register" },
              ],
            },
            {
              label: "Enterprise",
              title: true,
              children: [
                { label: "CRM software" },
                { label: "Marketing management" },
                { label: "Security" },
                { label: "Consulting" },
              ],
            },
            {
              label: "Products",
              title: true,
              children: [
                { label: "UI Kit" },
                { label: "WordPress themes" },
                { label: "WordPress plugins" },
                {
                  icon: <IconFolder />,
                  label: "Open source",
                  collapsible: true,
                  badge: (
                    <Badge variant="info" size="xs" appearance="soft">
                      NEW
                    </Badge>
                  ),
                  children: [
                    { label: "Auth management system" },
                    { label: "VScode theme" },
                    { label: "Color picker app" },
                  ],
                },
              ],
            },
            {
              label: "Company",
              title: true,
              children: [
                { label: "About us" },
                { label: "Contact us" },
                { label: "Privacy policy" },
                { label: "Press kit" },
              ],
            },
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

export default MenuExample;
