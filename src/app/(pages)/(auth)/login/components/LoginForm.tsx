"use client";

import { useState } from "react";
import { Title, Text, Button, Input } from "@/_components";
import { useRouter } from "next/navigation";

import { login } from "@/_modules/Auth/methods";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const navigateToForgotPassword = () => router.push("/forgot-password");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);

      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white px-7 py-8 rounded-2xl md:w-[424px] sm:w-[320px]">
      {/* <Logo className="mb-8" /> */}
      <Title level={3} className="mb-4 ">
        Log in
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
          className="mb-2 "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Please enter your password"
        />
        <Text
          onClick={navigateToForgotPassword}
          className="flex justify-end cursor-pointer"
        >
          Forgot password ?
        </Text>
        <Button isLoading={loading} type="submit" className="w-full mt-8">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
