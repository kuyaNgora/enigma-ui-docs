import type { PropRow } from "../../component/props.table";

export const heroProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    description: "Content to be rendered inside the hero section.",
  },
  {
    name: "image",
    type: "string",
    description: "URL of the background image.",
  },
  {
    name: "overlay",
    type: "boolean",
    defaultValue: "false",
    description: "Adds a dark overlay on top of the image.",
  },
  {
    name: "asForm",
    type: "boolean",
    defaultValue: "false",
    description:
      "Renders the hero as a form container (e.g., for login pages).",
  },
  {
    name: "className",
    type: "string",
    description: "Additional custom class names for the hero wrapper.",
  },
];

export const exampleUsageCode = `
import { Hero } from "@/components";

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
`.trim();
