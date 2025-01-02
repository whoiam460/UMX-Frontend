import React from "react";
import clsx from "clsx";

type Size = "xxs" | "xs" | "base1" | "base" | "sm" | "md" | "lg" | "xl";
type Variant = "white" | "primary" | "secondary" | "danger";

const baseStyles = "flex-inline items-center justify-center";
const sizeStyles: Record<Size, number> = {
  xxs: 14,
  xs: 18,
  base1: 20,
  base: 24,
  sm: 30,
  md: 36,
  lg: 48,
  xl: 56,
};
const variantStyles: Record<Variant, string> = {
  white: "text-white",
  primary: "text-primary",
  secondary: "text-secondary",
  danger: "text-red-500",
};

interface IconProps {
  component: React.ElementType;
  size?: Size;
  variant?: Variant;
  className?: string;
  onClick?: React.MouseEventHandler;
  props?: React.HTMLAttributes<HTMLElement>;
}

const Icon: React.FC<IconProps> = ({
  component: Component,
  size = "base",
  variant = "primary",
  className,
  onClick,
  props,
}) => {
  const classes = clsx(variantStyles[variant], baseStyles, className);

  return (
    Component && (
      <Component
        onClick={onClick}
        size={sizeStyles[size]}
        className={classes}
        {...props}
      />
    )
  );
};

export default Icon;
