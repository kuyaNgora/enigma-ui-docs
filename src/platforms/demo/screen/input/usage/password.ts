export const inputPasswordExample = `
import { useState } from "react";
import { Input } from "@/components";

const InputPasswordExample = () => {
  const { password, setPassword } = useState('');

  return (
   <Input
      label="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      size="sm"
      variant="error"
      required
    />
  )
}
`.trim();
