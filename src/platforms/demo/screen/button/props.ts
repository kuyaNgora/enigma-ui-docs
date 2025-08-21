import type { PropRow } from "../../component/props.table";

export const buttonProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Button content (usually text or icon).",
  },
  {
    name: "variant",
    type: [
      '"default"',
      '"primary"',
      '"secondary"',
      '"accent"',
      '"info"',
      '"success"',
      '"warning"',
      '"error"',
    ],
    defaultValue: '"default"',
    description: "Color variant of the button.",
  },
  {
    name: "size",
    type: ['"xs"', '"sm"', '"md"', '"lg"', '"xl"'],
    defaultValue: '"md"',
    description: "Size of the button.",
  },
  {
    name: "shape",
    type: ['"wide"', '"block"', '"square"', '"circle"'],
    description: "Shape modifier for the button.",
  },
  {
    name: "styleType",
    type: ['"outline"', '"dash"', '"soft"', '"ghost"', '"link"'],
    description: "Style variant of the button.",
  },
  {
    name: "isLoading",
    type: "boolean",
    defaultValue: "false",
    description: "Displays a spinner if true.",
  },
  {
    name: "isDisabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the button if true.",
  },
  {
    name: "onClick",
    type: "() => void",
    description: "Click handler.",
  },
  {
    name: "type",
    type: ['"button"', '"submit"', '"reset"'],
    defaultValue: '"button"',
    description: "The native HTML button type.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export const buttonUsageExample = `
import { Button } from "@/components";
import { FaTrash } from "react-icons/fa";

const ButtonExample = () => {
  return (
      <div className="flex flex-wrap gap-2">
        <Button variant="primary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>

        <Button variant="success" size="lg" isLoading>
          Saving...
        </Button>

        <Button variant="warning" shape="block">
          Block Button
        </Button>

        <Button variant="info" styleType="outline">
          Outline Info
        </Button>

        <Button variant="error" shape="circle">
          <FaTrash className="w-4 h-4" />
        </Button>
      </div>
  );
};

export default ButtonExample;
`.trim();
