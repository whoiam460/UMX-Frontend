import React from "react";
import clsx from "clsx";

type TitleProps = {
  level?: 1 | 2 | 3 | 4;
  variant?: "black" | "white" | "currentColor" | "primary" | "accent";
  weight?: "bold" | "semiBold" | "medium" | "normal" | "light";
  children: React.ReactNode;
  className?: string;
};

const styles = {
  levels: {
    1: "text-[48px] leading-[4rem]",
    2: "text-[40px] leading-[3.25rem]",
    3: "text-[32px] leading-[2.75rem]",
    4: "text-[24px] leading-8",
  },
  variants: {
    black: "text-black",
    white: "text-white",
    currentColor: "text-current",
    primary: "text-primary",
    accent: "text-accent",
  },
  weights: {
    bold: "font-bold",
    semiBold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
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
    "leading-none",
    styles.levels[level],
    styles.variants[variant],
    styles.weights[weight],
    className
  );

  return <TitleTag className={classes}>{children}</TitleTag>;
};

export default Title;
