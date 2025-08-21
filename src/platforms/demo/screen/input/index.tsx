import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/components";
import { PropsTable } from "../../component/props.table";
import { inputProps } from "./props";
import { CodeBlock } from "../../component/codeblock";
import * as usage from "./usage";

const InputExample = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [amount, setAmount] = useState("150000");

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Input</h2>
      <p className="text-sm text-gray-500 mb-6">
        This is an example of how to use the Input component with various
        properties.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Props</h4>
        <p className="text-sm text-gray-500 mb-6">
          These are the available props for the Input component.
        </p>
        <PropsTable rows={inputProps} />
      </div>

      <h4 className="text-xl font-semibold mb-4">Usage Example</h4>

      <div>
        <h4 className="text-xl font-semibold mb-4">Text Input</h4>
        <p className="text-sm text-gray-500 mb-6">
          A simple text input with a prefix icon.
        </p>

        <Input
          label="Username"
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="xs"
          variant="primary"
          prefix={<FaUser />}
          required
        />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={usage.inputTextExample} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Password Input</h4>
        <p className="text-sm text-gray-500 mb-6">
          A password input field with error variant.{" "}
        </p>

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="sm"
          variant="error"
          required
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={usage.inputPasswordExample} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Currency Input</h4>
        <p className="text-sm text-gray-500 mb-6">
          An input field for currency values with a suffix.
        </p>

        <Input
          label="Nominal Bayar"
          type="currency"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          size="md"
          variant="success"
          suffix={<span className="text-sm">IDR</span>}
          required
        />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={usage.inputCurrencyExample} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Textarea Input</h4>
        <p className="text-sm text-gray-500 mb-6">
          A textarea input for longer text entries.
        </p>

        <Input
          label="Bio"
          type="textarea"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          size="lg"
          variant="neutral"
          required
        />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={usage.inputTextareaExample} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Input Disabled</h4>
        <p className="text-sm text-gray-500 mb-6">
          An input field that is disabled and cannot be interacted with.
        </p>

        <Input
          label="Disabled Input"
          value="Tidak bisa diubah"
          size="xl"
          disabled
          variant="warning"
        />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <CodeBlock language="tsx" code={usage.inputDisabledExample} />
      </div>
    </div>
  );
};

export default InputExample;
