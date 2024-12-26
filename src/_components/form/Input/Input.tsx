import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

const inputStyles = {
  base: "text-[20px] leading-[28px]  bg-transparent font-normal p-2  w-full focus:outline-none text-black ",
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
  icon?: React.ReactNode;
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
        <div className="flex items-center">
          {icon && icon}
          <input
            autoFocus={autoFocus}
            ref={ref}
            className={inputClasses}
            placeholder={!withoutPlaceholder ? placeholder : undefined}
            value={value}
            onClick={onClick}
            {...props}
          />
        </div>
        {error && <span className="text-red-600">{error}</span>}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
