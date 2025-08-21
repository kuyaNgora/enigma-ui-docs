import { Guide, type GuideStep } from "@/components";
import { PropsTable } from "../../component/props.table";
import { guideProps, guideStepProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";
import { useEffect, useState } from "react";

const GuideExample = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const steps: GuideStep[] = [
    {
      targetId: "step1",
      title: "Welcome",
      content: "Ini adalah langkah pertama dari tutorial.",
      placement: "right" as const,
    },
    {
      targetId: "step2",
      title: "Lihat fitur ini",
      content: "Fitur ini sangat penting untuk dipahami.",
      placement: "bottom" as const,
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 0); // tunggu 1 tick event loop

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Guide</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Guide component is used to display step-by-step tooltips over target
        elements in the UI. Useful for onboarding, tutorials, or walkthroughs.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Guide</h4>
        <PropsTable rows={guideProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">GuideStep</h4>
        <PropsTable rows={guideStepProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <div>
          <div id="step1" className="btn">
            Target 1
          </div>
          <div id="step2" className="btn">
            Target 2
          </div>

          {visible && (
            <Guide
              steps={steps}
              current={current}
              onNext={() => setCurrent((c) => c + 1)}
              onPrev={() => setCurrent((c) => c - 1)}
              onClose={() => setVisible(false)}
            />
          )}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default GuideExample;
