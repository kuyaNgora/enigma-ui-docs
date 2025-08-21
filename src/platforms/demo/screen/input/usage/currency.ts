export const inputCurrencyExample = `
import { useState } from "react";
import { Input } from "@/components";

const InputCurrencyExample = () => {
  const { amount, setAmount } = useState('');

  return (
   <Input
      label="Nominal Bayar"
      type="currency"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      size="md"
      variant="success"
      suffix={<span className='text-sm'>IDR</span>}
      required
    />
  )
}
`.trim();
