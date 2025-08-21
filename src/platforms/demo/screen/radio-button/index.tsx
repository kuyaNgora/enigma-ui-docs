import { RadioButtons } from "@/components";
import {
  radioButtonsProps,
  exampleRadioButtonsCode,
  radioOptionProps,
} from "./props";
import { useState } from "react";
import { PropsTable } from "@/platforms/demo/component/props.table";
import { CodeBlock } from "@/platforms/demo/component/codeblock";

const RadioButtonsExample = () => {
  const [value, setValue] = useState<string>("option1");

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold">Radio Buttons</h1>

      <section className="space-y-2">
        <p className="text-sm text-gray-600">
          The <strong>Radio Buttons</strong> component is a group of styled
          radio buttons that allows users to select exactly one option from a
          predefined list. It supports custom icons and dynamic styling for
          active/inactive states.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <PropsTable rows={radioButtonsProps} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">RadioOption Props</h2>
        <PropsTable rows={radioOptionProps} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Usage Example</h2>
        <RadioButtons
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mt-8 mb-2">Code Example</h2>
        <CodeBlock language="tsx" code={exampleRadioButtonsCode} />
      </section>
    </div>
  );
};

export default RadioButtonsExample;
