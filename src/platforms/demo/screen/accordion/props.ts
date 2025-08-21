import type { PropRow } from "../../component/props.table";

export const accordionProps: PropRow[] = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "List of `Accordion.Item` components as children.",
  },
  {
    name: "join",
    type: "boolean",
    defaultValue: "false",
    description:
      "Applies `join join-vertical` classes to merge accordion items visually.",
  },
];

export const accordionItemProps: PropRow[] = [
  {
    name: "title",
    type: "ReactNode",
    required: true,
    description: "Displayed in the header section of the item.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content shown when the accordion item is expanded.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "Whether this item is open by default.",
  },
];

export const exampleUsageCode = `
import { useState } from "react";
import { Accordion } from "@/components";

const Example = () => {

  return (
    <Accordion join>
      <Accordion.Item title="Section 1" defaultOpen>
        Content for section 1
      </Accordion.Item>
      <Accordion.Item title="Section 2">
        Content for section 2
      </Accordion.Item>
      <Accordion.Item title="Section 3">
        Content for section 3
      </Accordion.Item>
    </Accordion>
  );
};
`.trim();
