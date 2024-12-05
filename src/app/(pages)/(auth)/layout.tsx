import { ReactNode } from "react";
import { AuthorizationLayout } from "@/_components";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <AuthorizationLayout>{children}</AuthorizationLayout>;
};

export default Layout;
