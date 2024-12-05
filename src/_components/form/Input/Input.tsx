import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";
import Image from "next/image";

const inputStyles = {
  base: "text-[16px] leading-[24px] font-normal p-3 rounded-xl w-full focus:outline-none text-black bg-secondary-lighten-1 border solid border-secondary-lighten-1 focus:border-secondary-darken-1",
};

type InputProps = {
  value?: string;
  withoutPlaceholder?: boolean;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  onClick?: () => void;
  autoFocus?: boolean;
  label?: string;
  error?: string;
  icon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      withoutPlaceholder = false,
      placeholder = "Enter text here ...",
      className = "",
      wrapperClassName = "",
      onClick,
      autoFocus,
      label,
      error,
      icon,
      ...props
    },
    ref
  ) => {
    const inputClasses = clsx(inputStyles.base, className);
    const wrapperClasses = clsx("block flex-1", wrapperClassName);

    return (
      <label className={wrapperClasses}>
        {label && <span>{label}</span>}
        <div className="relative">
          {icon && (
            <Image
              src={icon}
              alt="input icon"
              className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2"
              style={{ pointerEvents: "none" }}
            />
          )}
          <input
            autoFocus={autoFocus}
            ref={ref}
            className={inputClasses}
            placeholder={!withoutPlaceholder ? placeholder : undefined}
            value={value}
            onClick={onClick}
            {...props}
            style={{
              paddingLeft: icon ? "30px" : "10px",
            }}
          />
        </div>
        {error && <span className="text-red-600">{error}</span>}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
