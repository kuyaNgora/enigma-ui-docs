import type { PropRow } from "../../component/props.table";

export const showToastProps: PropRow[] = [
  {
    name: "id",
    type: "string",
    description:
      "Custom identifier for the toast. If omitted, a unique ID will be generated.",
  },
  {
    name: "message",
    type: "string",
    required: true,
    description: "The message content to be displayed in the toast.",
  },
  {
    name: "type",
    type: ['"success"', '"error"', '"info"', '"warning"'],
    defaultValue: '"info"',
    description: "The visual style or purpose of the toast.",
  },
  {
    name: "position",
    type: [
      '"top-start"',
      '"top-center"',
      '"top-end"',
      '"bottom-start"',
      '"bottom-center"',
      '"bottom-end"',
    ],
    defaultValue: '"bottom-end"',
    description: "Where the toast will appear on the screen.",
  },
  {
    name: "duration",
    type: "number",
    defaultValue: "3000",
    description:
      "How long (in milliseconds) the toast stays visible before auto-dismiss.",
  },
];

export const showToastUsageExample = `
import { useOnwardUI } from "@/components";

const MyComponent = () => {
  const { showToast } = useOnwardUI();

  const handleClick = () => {
    showToast({
      message: "Your changes have been saved!",
      type: "success",
      position: "top-end",
      duration: 5000,
    });
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Show Toast
    </button>
  );
};
`.trim();
