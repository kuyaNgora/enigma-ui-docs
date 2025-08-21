import { Hero } from "@/components";
import { PropsTable } from "../../component/props.table";
import { heroProps, exampleUsageCode } from "./props";
import { CodeBlock } from "../../component/codeblock";

const HeroExample = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Hero</h2>
      <p className="text-sm text-gray-500 mb-6">
        The Hero component is a layout block for highlighting key content. It
        supports optional background images, overlay effects, and flexible
        content placement.
      </p>

      <div>
        <h4 className="text-xl font-semibold mb-4">Hero Props</h4>
        <PropsTable rows={heroProps} />
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
        <Hero
          image="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
          overlay
        >
          <div className="text-white max-w-lg text-center">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </Hero>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Code Example</h4>
        <CodeBlock language="tsx" code={exampleUsageCode} />
      </div>
    </div>
  );
};

export default HeroExample;
