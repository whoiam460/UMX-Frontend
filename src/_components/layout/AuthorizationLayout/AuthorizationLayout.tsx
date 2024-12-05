import { ReactNode } from "react";

type AuthorizationLayoutProps = {
  children: ReactNode;
};

const AuthorizationLayout = ({ children }: AuthorizationLayoutProps) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
};

export default AuthorizationLayout;
