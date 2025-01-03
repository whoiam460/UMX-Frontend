import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { FaSpinner } from "react-icons/fa";

type ButtonProps = {
  children?: React.ReactNode;
  size?: "default" | "md" | "sm";
  shape?: "default" | "circle";
  variant?: "accent" | "primary";
  format?: "filled";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  base: "text-black flex items-center justify-center transition-all duration-300",
  shapes: {
    default: "rounded-lg",
    circle: "rounded-full",
  },
};

const variants = {
  primary: {
    filled:
      "bg-primary text-white hover:bg-primary-darken-1 hover:text-neutral-darken-1 active:bg-primary-darken-2 active:text-neutral-darken-2 focus:bg-primary-lighten-1 focus:text-neutral-lighten-1",
  },
  accent: {
    filled:
      "bg-accent text-dark hover:bg-accent-lighten-2 hover:text-dark-darken-1 active:bg-accent-darken-1 active:text-dark-darken-2 focus:bg-accent-lighten-1 focus:text-dark-lighten-1",
  },
};

const sizes = {
  default: "py-4 px-6",
  md: "py-3 px-8",
  sm: "py-2 px-11",
  xs: "py-2 px-6",
};

const disabledStyles = {
  primary: "cursor-not-allowed bg-primary-lighten-3 text-neutral-darken-3",
  accent: "cursor-not-allowed bg-accent-lighten-4 text-dark-lighten-3",
};

const Spinner: React.FC = () => (
  <FaSpinner className="w-5 h-5 mr-3 text-black animate-spin" />
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    size = "default",
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
  const isButtonDisabled = disabled || disabled || isLoading;
  const classes = clsx(
    styles.base,
    styles.shapes[shape],
    sizes[size],
    !isButtonDisabled ? variants[variant][format] : disabledStyles[variant],
    !!block && "w-full",
    className
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={isButtonDisabled}
      {...rest}
      ref={ref}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
});

export default Button;
