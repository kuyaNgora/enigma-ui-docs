export const inputTextExample = `
import { useState } from "react";
import { Input } from "@/components";
import { FaUser } from "react-icons/fa";

const InputTextExample = () => {
  const { text, setText } = useState('');

  return (
   <Input
      label="Username"
      value={text}
      onChange={(e) => setText(e.target.value)}
      size="xs"
      variant="primary"
      prefix={<FaUser />}
      required
    />
  )
}
`.trim();
