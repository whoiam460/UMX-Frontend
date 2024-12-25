import React from "react";
import { Text } from "@/_components";
import clsx from "clsx";

type TagProps = {
  text?: string;
  className?: string;
  variant?: "sm" | "md";
};

const styles = {
  paddings: {
    sm: "px-2 py-1",
    md: "px-8 py-3",
  },
  textSize: {
    sm: 3 as 3,
    md: 1 as 1,
  },
};

const Tag: React.FC<TagProps> = ({ text, className, variant = "md" }) => {
  const wrapperStyles = clsx(
    "rounded-lg bg-[#D9D9D9]  w-fit",
    styles.paddings[variant],
    className
  );

  return (
    <div className={wrapperStyles}>
      <Text level={styles.textSize[variant]}>{text}</Text>
    </div>
  );
};

export default Tag;
