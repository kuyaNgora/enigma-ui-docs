import { IconDoc, IconFile, IconFolder } from "@/assets/icons";
import { SidebarLink } from "./sidebarLink";

const navItems = [
  {
    label: "Actions",
    items: [
      { label: "Button", path: "/docs/button" },
      { label: "Dropdown", path: "/docs/dropdown" },
      { label: "Modal", path: "/docs/modal" },
    ],
  },
  {
    label: "Data Display",
    items: [
      { label: "Accordion", path: "/docs/accordion" },
      { label: "Avatar", path: "/docs/avatar" },
      { label: "Badge", path: "/docs/badge" },
      { label: "Card", path: "/docs/card" },
    ],
  },
  {
    label: "Data Input",
    items: [
      { label: "Checkbox", path: "/docs/checkbox" },
      { label: "Date Picker", path: "/docs/date-picker" },
      { label: "File Input", path: "/docs/file-input" },
      { label: "Filter", path: "/docs/filter" },
      { label: "Input", path: "/docs/input" },
      { label: "Radio", path: "/docs/radio" },
      { label: "Radio Button", path: "/docs/radio-button" },
      { label: "Select", path: "/docs/select" },
      { label: "Toggle", path: "/docs/toggle" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { label: "Alert", path: "/docs/alert" },
      { label: "Loading", path: "/docs/loading" },
      { label: "Skeleton", path: "/docs/skeleton" },
      { label: "Toast", path: "/docs/toast" },
      { label: "Tooltip", path: "/docs/tooltip" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { label: "Breadcrumbs", path: "/docs/breadcrumbs" },
      { label: "Menu", path: "/docs/menu" },
      { label: "Navbar", path: "/docs/navbar" },
      { label: "Pagination", path: "/docs/pagination" },
      { label: "Steps", path: "/docs/steps" },
      { label: "Tabs", path: "/docs/tabs" },
    ],
  },
  {
    label: "Layout",
    items: [
      { label: "Divider", path: "/docs/divider" },
      { label: "Drawer", path: "/docs/drawer" },
      { label: "Footer", path: "/docs/footer" },
      { label: "Hero", path: "/docs/hero" },
      { label: "Indicator", path: "/docs/indicator" },
    ],
  },
];

const Sidebar = () => {
  return (
    <ul className="menu menu-xs rounded-box w-full">
      <li>
        <SidebarLink to="/docs" end icon={<IconFile className="h-4 w-4" />}>
          Introduction
        </SidebarLink>
      </li>
      <li>
        <details open>
          <summary>
            <IconFolder className="h-4 w-4" />
            Components
          </summary>
          <ul>
            {navItems.map((section) => (
              <li key={section.label}>
                <details open>
                  <summary>
                    <IconFolder className="h-4 w-4" />
                    {section.label}
                  </summary>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <SidebarLink
                          to={item.path}
                          end
                          icon={<IconDoc className="h-4 w-4" />}
                        >
                          {item.label}
                        </SidebarLink>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Sidebar;
