"use client";

import { useEffect, useState, ReactNode } from "react";

interface ConsentWrapperProps {
  children: ReactNode;
}

export default function ConsentWrapper({ children }: ConsentWrapperProps) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const accepted = localStorage.getItem("cookie_consent") === "accepted";
      setConsent(accepted);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (consent === null) return null;

  if (!consent) return null;

  return <>{children}</>;
}
