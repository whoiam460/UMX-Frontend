import { Icon, Title } from "@/_components";
import clsx from "clsx";

const wrapperBaseStyles = `flex 
items-center 
cursor-pointer 
transition-all 
duration-300 
ease-in-out 
rounded-md 
py-2 
px-4
`;

const textBaseStyles = `w-full `;

const variants: Record<
  "default" | "black" | "danger" | "white",
  { wrapper: string; text: string }
> = {
  default: {
    wrapper: "hover:bg-secondary active:bg-secondary",
    text: "hover-text-primary",
  },
  black: {
    wrapper: "hover:bg-black hover:text-white active:bg-black",
    text: "text-current",
  },
  danger: {
    wrapper: "hover:bg-red-100 text-red-500",
    text: "text-red-500",
  },
  white: {
    wrapper: "hover:bg-red-100 text-white",
    text: "text-white",
  },
};

interface NavigationItemProps {
  title: string;
  link: string;
  icon: React.ElementType;
  variant?: "default" | "black" | "danger" | "white";
  onClick?: React.MouseEventHandler;
  currentPath?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  title,
  link,
  icon,
  variant = "white",
  onClick,
  currentPath,
}) => {
  const isTabActive = currentPath ? currentPath.includes(link) : null;

  const wrapperClasses = clsx(
    wrapperBaseStyles,
    isTabActive
      ? "bg-primary text-white hover:text-white hover:bg-primary"
      : variants[variant].wrapper
  );

  const textItemClasses = clsx(
    textBaseStyles,
    isTabActive ? "text-white hover:text-white" : variants[variant].text
  );

  return (
    <div
      key={`navigation-${title}-${link}`}
      className={wrapperClasses}
      onClick={onClick}
    >
      <Icon className="mr-4" component={icon} variant={variant} size="md" />
      <Title className={textItemClasses} level={4}>
        {title}
      </Title>
    </div>
  );
};

export default NavigationItem;
