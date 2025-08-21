import type { PropRow } from "../../component/props.table";

export const paginationProps: PropRow[] = [
  {
    name: "currentPage",
    type: "number",
    required: true,
    description: "The currently active page (1-based index).",
  },
  {
    name: "totalPages",
    type: "number",
    required: true,
    description: "The total number of pages available.",
  },
  {
    name: "onChange",
    type: "(page: number) => void",
    required: true,
    description: "Callback triggered when a different page is selected.",
  },
  {
    name: "className",
    type: "string",
    description:
      "Optional class name for customizing pagination container style.",
  },
  {
    name: "size",
    type: ["xs", "sm", "md", "lg"],
    defaultValue: "md",
    description: "Controls the button size used in the pagination component.",
  },
];

export const exampleUsageCode = `
import { Pagination } from "@/components";

<Pagination
  currentPage={2}
  totalPages={5}
  onChange={(page: number) => console.log("Go to page", page)}
/>
`.trim();
