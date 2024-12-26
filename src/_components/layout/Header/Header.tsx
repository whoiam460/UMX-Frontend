"use client";
import { FaRegHeart } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";

import { Container, Button, IconLink } from "@/_components";
import { useRouter } from "next/navigation";
// TODO: Change hex color to color config when it will be ready
const Header = () => {
  const router = useRouter();

  const onNavigateToAddProduct = () => router.push("products/create");

  return (
    <Container className="h-[72px]  flex items-center justify-end">
      <IconLink
        className="mr-5 text-[30px]"
        icon={<MdNotificationsNone className="fill-white" />}
        text="Сповіщення"
      />
      <IconLink
        className="mr-5 text-[30px]"
        icon={<FaRegHeart className="fill-white" />}
        text="Улюблені"
      />
      <Button className="py-4 bg-[#E4E5EA] " onClick={onNavigateToAddProduct}>
        Додати оголошення
      </Button>
    </Container>
  );
};

export default Header;
