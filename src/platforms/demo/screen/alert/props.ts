import type { PropRow } from "../../component/props.table";

export const alertProps: PropRow[] = [
  {
    name: "variant",
    type: ["info", "success", "warning", "error", "default"],
    defaultValue: "default",
    description: "Color variant to indicate the alert purpose.",
  },
  {
    name: "appearance",
    type: ["default", "dash", "soft", "outline"],
    defaultValue: "default",
    description: "Visual appearance of the alert container.",
  },
  {
    name: "layout",
    type: ["horizontal", "vertical"],
    defaultValue: "vertical",
    description: "Layout direction of the alert content.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls padding and font size of the alert.",
  },
  {
    name: "title",
    type: "string",
    description: "Title displayed at the top of the alert.",
  },
  {
    name: "message",
    type: "string",
    description: "Short description or message in the alert body.",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Custom content to be rendered inside the alert.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon displayed before the content.",
  },
  {
    name: "dismissible",
    type: "boolean",
    defaultValue: "false",
    description: "Shows a close button to dismiss the alert.",
  },
  {
    name: "shadow",
    type: "boolean",
    defaultValue: "false",
    description: "Adds a shadow to the alert container.",
  },
  {
    name: "border",
    type: "boolean",
    defaultValue: "false",
    description: "Applies a border to the alert.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class names for the alert container.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    description: "Callback function triggered when alert is dismissed.",
  },
];

export const exampleUsageCode = `
import { Alert } from "@/components";

const [visible, setVisible] = useState(true);

{visible && (
    <Alert
        variant="success"
        title="Success"
        message="Your changes have been saved."
        dismissible
        onDismiss={() => setVisible(false)}
    />
)}
`.trim();
