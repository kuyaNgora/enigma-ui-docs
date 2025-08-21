export const inputTextareaExample = `
import { useState } from "react";
import { Input } from "@/components";

const InputTextareaExample = () => {
  const { bio, setBio } = useState('');

  return (
   <Input
      label="Bio"
      type="textarea"
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      size="lg"
      variant="neutral"
      required
    />
  )
}
`.trim();
