import React from "react";
import { Text } from "@/_components";
import Image from "next/image";

type CategoryCardProps = {
  text?: string;
  imgUrl: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ text, imgUrl }) => {
  return (
    <div className="relative rounded-lg  max-h-[220px] h-full w-full cursor-pointer py-6 transition-shadow duration-400  active:bg-transparent bg-white hover:shadow-[0px_0px_14px] hover:shadow-primary-lighten-1">
      {imgUrl && (
        <Image
          quality={95}
          src={imgUrl}
          className="mx-auto mb-1"
          alt="Product image"
        />
      )}
      <Text variant="primary" level={1} className="w-full text-center">
        {text}
      </Text>
    </div>
  );
};

export default CategoryCard;
