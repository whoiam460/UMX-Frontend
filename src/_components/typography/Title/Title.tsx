import React from "react";
import clsx from "clsx";

type TitleProps = {
  level?: 1 | 2 | 3 | 4;
  variant?: "black" | "white";
  weight?: "bold" | "semiBold";
  children: React.ReactNode;
  className?: string;
};

const styles = {
  levels: {
    1: "text-[44px]",
    2: "text-[28px]",
    3: "text-[24px]",
    4: "text-[18px]",
  },
  variants: {
    black: "text-black",
    white: "text-white",
  },
  weights: {
    bold: "font-bold",
    semiBold: "font-semibold",
  },
};

const Title: React.FC<TitleProps> = ({
  level = 1,
  variant = "black",
  weight = "bold",
  children,
  className = "",
}) => {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;

  const classes = clsx(
    "font-Gilroy leading-none",
    styles.levels[level],
    styles.variants[variant],
    styles.weights[weight],
    className
  );

  return <TitleTag className={classes}>{children}</TitleTag>;
};

export default Title;
