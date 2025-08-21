import { Button, Drawer, useEnigmaUI } from "@/components";
import { CodeBlock } from "../../component/codeblock";
import { PropsTable } from "../../component/props.table";
import { drawerProps, exampleDrawerCode } from "./props";

const DrawerExample = () => {
  const { openDrawer, closeDrawer } = useEnigmaUI();

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Drawer</h2>
      <p className="text-sm text-gray-500 mb-6">
        The <strong>Drawer</strong> component is used to display off-canvas
        content from the left or right side of the screen. It is commonly used
        for navigation, settings panels, or dynamic menus.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Drawer Props</h4>
        <PropsTable rows={drawerProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <p className="text-sm text-gray-500 mb-6">
          You can open drawers dynamically by using the{" "}
          <code>useOnwardUI()</code> hook and calling <code>openDrawer()</code>{" "}
          with an <code>id</code> and <code>content</code>. Each drawer must
          manage its own <code>onClose</code> logic using{" "}
          <code>closeDrawer(id)</code>.
        </p>

        <div className="mt-4">
          <Button
            variant="primary"
            size="md"
            onClick={() =>
              openDrawer({
                id: "settings",
                content: (
                  <Drawer open onClose={() => closeDrawer("settings")}>
                    <div className="p-4">
                      <p>This is your drawer content</p>
                    </div>
                  </Drawer>
                ),
              })
            }
          >
            Open Drawer
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={exampleDrawerCode} />
      </div>
    </div>
  );
};

export default DrawerExample;
