export const inputDisabledExample = `
import { useState } from "react";
import { Input } from "@/components";

const InputDisabledExample = () => {
  const { text, setText } = useState('');

  return (
   <Input
      label="Disabled Input"
      value="Tidak bisa diubah"
      size="xl"
      disabled
      variant="warning"
    />
  )
}
`.trim();
