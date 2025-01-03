import React, { ElementType, ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

type TextProps = {
  tag?: ElementType;
  level?: 1 | 2 | 3;
  variant?: "black" | "white" | "primary" | "accent" | "currentColor";
  weight?: "bold" | "semiBold" | "medium" | "normal" | "light";
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};

const styles = {
  levels: {
    1: "text-[20px] leading-7",
    2: "text-[18px] leading-6",
    3: "text-[16px] leading-6",
    4: "text-[14px] leading-5",
    5: "text-[12px] leading-4",
  },

  variants: {
    white: "text-white",
    black: "text-black",
    primary: "text-primary",
    accent: "text-accent",
    currentColor: "text-current",
  },

  weight: {
    bold: "font-bold",
    semiBold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
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
    "inline-block",
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
