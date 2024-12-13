"use client";

import { Container, Button } from "@/_components";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const onNavigateToAddProduct = () => router.push("products/create");

  return (
    <Container className="h-[72px]  flex items-center justify-end">
      <Button onClick={onNavigateToAddProduct}>Додати оголошення</Button>
    </Container>
  );
};

export default Header;
