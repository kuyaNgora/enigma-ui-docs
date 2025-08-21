import { DatePicker } from "@/components";
import { PropsTable } from "../../component/props.table";
import { CodeBlock } from "../../component/codeblock";
import { datePickerProps, exampleUsageCode } from "./props";
import { useState } from "react";
import type { Dayjs } from "dayjs";

const DatePickerExample = () => {
  const [rangeDate, setRangeDate] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Date Picker</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Date Picker component allows selection of a single date or a date
        range. It supports both "single" and "range" modes, and lets you
        customize the date format and placeholder text.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Date Picker Props</h4>
        <PropsTable rows={datePickerProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <DatePicker
          mode="range"
          value={rangeDate}
          onChange={(date) =>
            setRangeDate(date as [Dayjs | null, Dayjs | null])
          }
          placeholder="Select Date Range"
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default DatePickerExample;
