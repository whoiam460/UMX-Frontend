import React from "react";
import { Text, Title } from "@/_components";
import Image from "next/image";

type ProductCardProps = {
  imgUrl?: string;
  title?: string;
  price?: number;
  location?: string;
  date?: string;
  onClick: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  onClick,
  imgUrl,
  title,
  price,
  location,
  date,
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-lg pt-3 pb-6 px-4 cursor-pointer bg-slate-600"
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          height={240}
          width={218}
          alt="Product image"
          className="mb-[14px] rounded-lg"
        />
      )}

      {/* Todo remove text-base, text-sm when typography will be ready  and paste level props*/}
      <Title className="mb-1 text-base ">{title}</Title>
      <Title className="mb-6 text-sm">{price}</Title>

      <Text className="!block">{location}</Text>
      <Text>{date}</Text>
    </div>
  );
};

export default ProductCard;
