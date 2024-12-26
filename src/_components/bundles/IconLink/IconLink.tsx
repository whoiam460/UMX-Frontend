import { Text } from "@/_components";
import clsx from "clsx";

type IconLinkProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
};

const IconLink: React.FC<IconLinkProps> = ({ icon, text, className }) => {
  const wrapperClasses = clsx(
    "flex flex-col items-center cursor-pointer",
    className
  );

  return (
    <div className={wrapperClasses}>
      {icon}
      <Text weight="normal" className="text-white" level={1}>
        {text}
      </Text>
    </div>
  );
};

export default IconLink;
