import React, { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const containerBaseStyles = "max-w-[1648px] w-[calc(100%-48px)] mx-auto";

const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  const containerClasses = clsx(containerBaseStyles, className);

  return (
    <div id={id} className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
