import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { FaSpinner } from "react-icons/fa";

type ButtonProps = {
  children?: React.ReactNode;
  size?: "default" | "md" | "sm";
  shape?: "default" | "circle";
  variant?: "accent" | "ghost" | "disabled" | "primary";
  format?: "filled";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  base: "text-black flex items-center justify-center transition-all duration-300",
  shapes: {
    default: "rounded-[8px]",
    circle: "rounded-full",
  },
};

const variants = {
  accent: {
    filled: "bg-accent hover:bg-accent-lighten-1 active:bg-accent-darken-1",
  },

  primary: {
    filled: "bg-primary hover:bg-accent-lighten-1 active:bg-accent-darken-1",
  },

  ghost: { filled: "bg-transparent" },

  disabled: {
    filled: "!bg-gray !text-black",
  },
};

const sizes = {
  default: "px-5 py-2.5",
  md: "px-5 py-5",
  sm: "p-[14px]",
};

const Spinner: React.FC = () => (
  <FaSpinner className="w-5 h-5 mr-3 text-black animate-spin" />
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    size = "md",
    shape = "default",
    variant = "primary",
    format = "filled",
    className,
    onClick,
    block,
    disabled,
    isLoading,
    type = "button",
    ...rest
  },
  ref
) {
  const isDisabled = disabled || isLoading;
  const classes = clsx(
    styles.base,
    styles.shapes[shape],
    sizes[size],
    isDisabled ? variants.disabled.filled : variants[variant][format],
    !!isDisabled && "cursor-not-allowed",
    !!block && "w-full",
    className
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      {...rest}
      ref={ref}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
});

export default Button;
