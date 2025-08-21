import { Button, Menu, Navbar, type MenuItem } from "@/components";
import { PropsTable } from "../../component/props.table";
import { navbarProps, navbarSlotProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const NavbarExample = () => {
  const routes = [
    {
      label: "Inbox",
    },
    {
      label: "Updates",
      collapsible: true,
      children: [
        { label: "Design" },
        { label: "Development" },
        { label: "Hosting" },
        { label: "Domain register" },
      ],
    },
    {
      label: "Stats",
    },
  ];

  const stripCollapsible = (items: MenuItem[]): MenuItem[] =>
    items.map((item) => {
      const cloned = { ...item };
      delete cloned.collapsible;
      if (cloned.children) {
        cloned.children = stripCollapsible(cloned.children);
      }
      return cloned;
    });

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Navbar</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Navbar component provides a horizontal navigation container with
        customizable layout slots and menu structures.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Navbar</h4>
        <PropsTable rows={navbarProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">
          Navbar.Brand, Navbar.Navigation & Navbar.Actions
        </h4>
        <PropsTable rows={navbarSlotProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Navbar background="base" shadow>
          <Navbar.Brand>
            <Navbar.MobileToggle items={stripCollapsible(routes)} />
            <span className="btn btn-ghost text-xl">MyApp</span>
          </Navbar.Brand>

          <Navbar.Navigation>
            <Menu
              horizontal
              size="md"
              className="bg-transparent"
              items={routes}
            />
          </Navbar.Navigation>

          <Navbar.Actions>
            <Button>Login</Button>
          </Navbar.Actions>
        </Navbar>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default NavbarExample;
