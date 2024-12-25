"use client";

import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
  aside: ReactNode;
  header: ReactNode;
};

const MainLayout = ({ header, aside, children }: MainLayoutProps) => {
  return (
    <div className="h-screen w-full">
      {/* <header className="sticky pl-[5rem] top-0 z-[999999] bg-[#D9D9D9]">
        {header}
      </header> */}

      <div className="flex h-screen flex-grow  overflow-x-hidden">
        <div className="z-1">{aside}</div>
        <div className="w-full flex flex-col relative overflow-y-auto ">
          <header className="sticky  z-[999999] top-0 left-0  bg-[#D9D9D9]">
            {header}
          </header>

          <main className="pt-4 w-full h-auto flex-grow ">{children}</main>

          <footer className="bg-[#8A8A8A]">
            <div className="min-h-[285px]">footer</div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
