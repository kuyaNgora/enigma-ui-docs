import type { PropRow } from "../../component/props.table";

export const datePickerProps: PropRow[] = [
  {
    name: "mode",
    type: `"single" | "range"`,
    defaultValue: `"single"`,
    description: "Date picker mode, either single date or range selection.",
    required: false,
  },
  {
    name: "value",
    type: "Dayjs | [Dayjs | null, Dayjs | null]",
    description:
      "The selected date value, either a single date or a date range.",
    required: false,
  },
  {
    name: "onChange",
    type: "(date: Dayjs | [Dayjs | null, Dayjs | null] | null) => void",
    description: "Callback function called when the date value changes.",
    required: false,
  },
  {
    name: "placeholder",
    type: "string",
    description:
      "Placeholder text displayed in the input when no date is selected.",
    required: false,
  },
  {
    name: "format",
    type: "string",
    defaultValue: `"YYYY-MM-DD"`,
    description: "Date display format string.",
    required: false,
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for custom styling.",
    required: false,
  },
];

export const exampleUsageCode = `
import { DatePicker } from "@/components";
import type { Dayjs } from "dayjs";
import { useState } from "react";

const [rangeDate, setRangeDate] = useState<[Dayjs | null, Dayjs | null]>([
  null,
  null,
]);

<DatePicker
  mode="range"
  value={rangeDate}
  onChange={(date) => setRangeDate(date as [Dayjs | null, Dayjs | null])}
  placeholder="Select Date Range"
/>
`.trim();
