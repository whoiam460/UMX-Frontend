"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { confirmEmail } from "@/_modules/Auth/methods";

const ConfirmEmailPage = () => {
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    const confirmEmailFunction = async () => {
      const response = await confirmEmail(token);
      setIsEmailVerified(response || false);

      if (response) {
        router.push("/");
      }
    };

    confirmEmailFunction();
  }, [router]);

  return (
    <div className="flex items-center justify-center">
      {isEmailVerified
        ? "Email confirmed, redirecting to dashboard..."
        : "Confirming your email..."}
    </div>
  );
};

export default ConfirmEmailPage;
