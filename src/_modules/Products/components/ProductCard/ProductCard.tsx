import React from "react";
import { Text, Title, Tag } from "@/_components";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

type ProductCardProps = {
  imgUrl?: string;
  title?: string;
  price?: number;
  location?: string;
  date?: string;
  condition: string;
  onClick?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  onClick,
  imgUrl,
  title,
  price,
  location,
  date,
  condition,
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-lg relative pt-3 pb-6 max-w-[250px] px-4 cursor-pointer bg-white"
    >
      <div className="w-full flex justify-between  absolute inset-x-0 top-[22px] px-7">
        <Tag type="secondary" variant="sm" text={condition} />
        <FaRegHeart className="fill-[#E4E5EA] text-[30px] ml-auto" />
      </div>

      {imgUrl && (
        <Image
          quality={95}
          src={imgUrl}
          height={240}
          width={218}
          alt="Product image"
          className="mb-[14px] mx-auto h-[240px] object-cover w-full rounded-lg"
        />
      )}

      {/* Todo remove text-base, text-sm when typography will be ready and paste level props */}
      <Title className="mb-1 text-base">{title}</Title>
      <Title className="mb-6 text-sm">{price}</Title>

      <Text className="!block">{location}</Text>
      <Text>{date}</Text>
    </div>
  );
};

export default ProductCard;
