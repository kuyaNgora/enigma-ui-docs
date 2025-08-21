import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  className,
}) => {
  return (
    <div className={`rounded bg-base-content p-4 text-sm ${className}`}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ background: "transparent", padding: 0 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
