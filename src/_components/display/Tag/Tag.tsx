import React from "react";
import { Text } from "@/_components";
import clsx from "clsx";

type TagProps = {
  text?: string;
  className?: string;
  variant?: "sm" | "md";
  type?: "primary" | "secondary";
};

const styles = {
  size: {
    sm: "px-2 py-1 rounded",
    md: "px-8 py-3 rounded-lg",
  },
  textSize: {
    sm: 5 as const,
    md: 3 as const,
  },
  fontWeight: {
    sm: "medium" as const,
    md: "bold" as const,
  },
  colors: {
    primary: "bg-primary text-white",
    secondary: "bg-neutral text-black",
  },
};

// TODO: Change hex color to color config when it will be ready
const Tag: React.FC<TagProps> = ({
  text,
  className,
  variant = "md",
  type = "primary",
}) => {
  const wrapperStyles = clsx(
    " flex items-center w-fit",
    styles.colors[type],
    styles.size[variant],
    className
  );

  return (
    <div className={wrapperStyles}>
      <Text
        variant="currentColor"
        weight={styles.fontWeight[variant]}
        level={styles.textSize[variant]}
      >
        {text}
      </Text>
    </div>
  );
};

export default Tag;
