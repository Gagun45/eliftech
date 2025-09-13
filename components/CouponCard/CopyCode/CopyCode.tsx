"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  code: string;
}

const CopyCode = ({ code }: Props) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard!')
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };
  return (
    <div className="flex items-center justify-between mt-auto flex-wrap gap-2">
      <span>
        Code: <strong>{code}</strong>
      </span>
      <Button disabled={copied} onClick={handleCopy}>
        Copy code
      </Button>
    </div>
  );
};
export default CopyCode;
