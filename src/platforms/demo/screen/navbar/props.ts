import type { PropRow } from "../../component/props.table";

export const navbarProps: PropRow[] = [
  {
    name: "background",
    type: ["base", "primary", "secondary", "accent"],
    defaultValue: "base",
    description: "Sets the background color of the navbar.",
  },
  {
    name: "shadow",
    type: "boolean",
    defaultValue: "false",
    description: "Adds a shadow below the navbar.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class name to override navbar styles.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Navbar content, including Slot or Menu components.",
  },
];

export const navbarSlotProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content placed inside a navbar slot (start, center, end).",
  },
  {
    name: "className",
    type: "string",
    description: "Additional class names for the slot.",
  },
];

export const exampleUsageCode = `
import { Navbar, Menu, Button } from "@/components";

const route = [
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
]

<Navbar background="base" shadow>
    <Navbar.Brand>
        <Navbar.MobileToggle items={route} />
        <span className="btn btn-ghost text-xl">MyApp</span>
    </Navbar.Brand>

    <Navbar.Navigation>
        <Menu
            horizontal
            size="md"
            className="bg-transparent"
            items={route}
        />
    </Navbar.Navigation>

    <Navbar.Actions>
        <Button>Login</Button>
    </Navbar.Actions>
</Navbar>

`.trim();
