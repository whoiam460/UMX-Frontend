"use client";

// import { ACTIONS_NAVIGATION, MAIN_NAVIGATION } from "@/_constants";
import { NavigationItem } from "./components";
import { usePathname, useRouter } from "next/navigation";
import { List } from "@/_components";

import { BiCategory } from "react-icons/bi";

import { LuUser } from "react-icons/lu";

import { TiMessages } from "react-icons/ti";
import { LuShoppingBag } from "react-icons/lu";

import { HiOutlineDesktopComputer } from "react-icons/hi";

import React from "react";
import clsx from "clsx";

const wrapperBaseStyles = "flex flex-col justify-between h-full";

type NavigationMenuProps = {
  className?: string;
};

const MAIN_NAVIGATION = [
  { title: "Головна", link: "/dashboard", icon: HiOutlineDesktopComputer },
  { title: "Категорії", link: "/categories", icon: BiCategory },
  {
    title: "Повідомлення",
    link: "/messages",
    icon: TiMessages,
  },
  { title: "Moї оголошення", link: "/products", icon: LuShoppingBag },
  { title: "Замовлення", link: "/orders", icon: LuShoppingBag },
];

const ACTIONS_NAVIGATION = [
  {
    title: "Профіль",
    icon: LuUser,
    link: "/login",
  },
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className }) => {
  const router = useRouter();
  const currentPath = usePathname();

  //   const onNavigate = (path) => router?.push(path);

  const navigationWrapperClasses = clsx(className, wrapperBaseStyles);

  return (
    <div className={navigationWrapperClasses}>
      <List
        className="gap-y-0"
        items={MAIN_NAVIGATION}
        // onNavigateForward={onNavigate}
      >
        <NavigationItem currentPath={currentPath} />
      </List>

      <List items={ACTIONS_NAVIGATION}>
        <NavigationItem />
      </List>
    </div>
  );
};

export default NavigationMenu;
