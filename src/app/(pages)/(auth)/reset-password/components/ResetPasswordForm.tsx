"use client";

import { Title, Text, Button, Input } from "@/_components";
import { resetPassword } from "@/_modules/Auth/methods";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetPasswordFrom = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (password === confirmPassword) {
        const response = await resetPassword(token, password);

        if (response) {
          router.push("/login");
        }
      } else {
        setLoading(false);
        // TODO: Change to massage information
        console.log("Password is incorrect");
      }
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white px-7 py-8 rounded-2xl md:w-[424px] sm:w-[320px]">
      {/* <Logo className="mb-8" /> */}
      <Title level={3} className="mb-4 ">
        Reset Password
      </Title>
      <Text level={3} className="mb-4 font-normal tracking-normal text-center">
        Enter passwords
      </Text>
      <form className="w-full" onSubmit={handleSubmit}>
        <Input
          className="mb-4"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Please enter your password"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Please confirm your password"
        />

        <Button isLoading={loading} type="submit" className="w-full mt-8">
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordFrom;
