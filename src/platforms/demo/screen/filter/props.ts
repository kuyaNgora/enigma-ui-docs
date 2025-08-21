import type { PropRow } from "../../component/props.table";

export const filterProps: PropRow[] = [
  {
    name: "name",
    type: "string",
    required: true,
    description: "Unique name identifier for the filter group.",
  },
  {
    name: "options",
    type: "FilterOption[]",
    required: true,
    description: "List of filter options to display as selectable buttons.",
  },
  {
    name: "showReset",
    type: "boolean",
    defaultValue: "false",
    description: "Displays a reset option to clear selection.",
  },
  {
    name: "selected",
    type: "string",
    description: "Currently selected option value.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    description: "Callback triggered when the user selects an option.",
  },
  {
    name: "className",
    type: "string",
    description: "Custom class name for the wrapper element.",
  },
];

export const filterOptionProps: PropRow[] = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "Visible text for the option.",
  },
  {
    name: "value",
    type: "string",
    required: true,
    description: "Internal value passed to `onChange` when selected.",
  },
];

export const exampleUsageCode = `
import { Filter } from "@/components";

const [selected, setSelected] = useState("");

const options = [
    { label: "Svelte", value: "svelte" },
    { label: "Vue", value: "vue" },
    { label: "React", value: "react" },
];

<Filter
    name="frameworks"
    options={options}
    selected={selected}
    onChange={setSelected}
/>
`.trim();
