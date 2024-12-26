import React from "react";
import { Text } from "@/_components";

type CategoryCardProps = {
  text?: string;
  imgUrl?: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ text, imgUrl }) => {
  return (
    <div
      className="relative rounded-lg max-w-[250px] h-[220px] w-full cursor-pointer  bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <Text className="w-full text-center  py-2 mb-6">{text}</Text>
    </div>
  );
};

export default CategoryCard;
