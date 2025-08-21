import { CodeBlock } from "../../component/codeblock";

const Introduction = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold">🎨 UI Component Library</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">What is this?</h2>
        <p className="text-sm text-gray-600">
          This is a modular and reusable UI component library built with{" "}
          <strong>TailwindCSS</strong>, <strong>DaisyUI</strong> and{" "}
          <strong>React Icons</strong>. All components are designed to be
          customizable, accessible, and easy to integrate into any React
          application.
        </p>
        <p className="text-sm text-gray-600">
          Each component is fully documented with prop definitions, live
          examples, and usage patterns that follow best practices.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">How to Use</h2>
        <p className="text-sm text-gray-600">
          Most components work out of the box, but if you're using components
          that rely on shared context (such as drawer, modals, toasts, etc.),
          you should wrap your app with <code>&lt;OnwardProvider&gt;</code> and
          add <code>&lt;ToastContainer&gt;</code>.
        </p>

        <h3 className="text-md font-semibold">📦 1. Installation</h3>
        <CodeBlock
          language="bash"
          code={`npm install tailwindcss daisyui react-icons`}
        />

        <h3 className="text-md font-semibold">⚙️ 2. Wrap with Provider</h3>
        <CodeBlock
          language="tsx"
          code={`
import { OnwardProvider, ToastContainer } from "@/components";

function App() {
  return (
    <OnwardProvider>
      <ToastContainer />
      <YourApp />
    </OnwardProvider>
  );
}
          `.trim()}
        />

        <h3 className="text-md font-semibold">🧩 3. Start Using Components</h3>
        <CodeBlock
          language="tsx"
          code={`
import { Button } from "@/components";

<Button variant="primary" size="md">
  Click me
</Button>
          `.trim()}
        />
      </section>
    </div>
  );
};

export default Introduction;
