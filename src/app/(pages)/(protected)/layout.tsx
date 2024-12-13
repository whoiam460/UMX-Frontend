"use client";

import { ReactNode } from "react";
import { MainLayout } from "@/_components";
import { Header, Aside } from "@/_components";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout header={<Header />} aside={<Aside />}>
      {children}
    </MainLayout>
  );
};

export default Layout;
