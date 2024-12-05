"use client";

import { useState } from "react";
import { Title, Text, Button, Input } from "@/_components";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/_modules/Auth/methods";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await forgotPassword(email);
      console.log(response);
      if (response) {
        console.log(response);
        router.push("/sent-confirm-email");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center bg-white px-7 py-8 rounded-2xl md:w-[424px] sm:w-[320px]">
      {/* <Logo className="mb-8" /> */}
      <Title level={3} className="mb-4 ">
        Forgot password
      </Title>
      <Text level={3} className="mb-4 font-normal tracking-normal text-center">
        Enter e-mail
      </Text>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input
          className="mb-4"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your e-mail"
        />

        <Button isLoading={loading} type="submit" className="w-full mt-8">
          Sent confirmation letter
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
