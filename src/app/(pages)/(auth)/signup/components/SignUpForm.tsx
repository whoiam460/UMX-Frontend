"use client";

import { Title, Text, Button, Input } from "@/_components";
import { signup } from "@/_modules/Auth/methods";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(email, password);

      router.push(`/sent-confirm-email?email=${email}`);
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white px-7 py-8 rounded-2xl md:w-[424px] sm:w-[320px]">
      {/* <Logo className="mb-8" /> */}
      <Title level={3} className="mb-4 ">
        Sign up
      </Title>
      <Text level={3} className="mb-4 font-normal tracking-normal text-center">
        Enter e-mail and password provided by the database administrator
      </Text>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input
          className="mb-4"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your e-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Please enter your password"
        />

        <Button isLoading={loading} type="submit" className="w-full mt-8">
          Get started
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
