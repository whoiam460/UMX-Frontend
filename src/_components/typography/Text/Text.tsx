import React, { ElementType, ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

type TextProps = {
  tag?: ElementType;
  level?: 1 | 2 | 3;
  variant?:
    | "black"
    | "white"
    | "primary"
    | "secondary"
    | "accent"
    | "currentColor";
  weight?: "normal" | "medium" | "bold";
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};

const styles = {
  levels: {
    1: "text-[16px] leading-[20px]",
    2: "text-[14px] leading-[18px]",
    3: "text-[8px] text-[12px] sm:text-[12px] sm:leading-[16px]",
  },

  variants: {
    white: "text-white",
    black: "text-black",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    currentColor: "text-current",
  },

  weight: {
    normal: "text-normal",
    medium: "font-medium",
    bold: "font-bold",
  },
};

const Text: React.FC<TextProps> = ({
  tag: HTMLTag = "span",
  level = 2,
  variant = "black",
  weight = "medium",
  children,
  className = "",
  onClick,
}) => {
  const classes = clsx(
    "font-Gilroy inline-block",
    styles.levels[level],
    styles.variants[variant],
    styles.weight[weight],
    className
  );

  return (
    <HTMLTag className={classes} onClick={onClick}>
      {children}
    </HTMLTag>
  );
};

export default Text;
