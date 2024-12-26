import React from "react";
import Image from "next/image";
import { Button } from "@/_components";

type AdvertisementAdvancedViewProps = {
  imgUrl?: string;
};

const AdvertisementAdvancedView: React.FC<AdvertisementAdvancedViewProps> = ({
  imgUrl,
}) => {
  return (
    <div className="relative h-[460px] cursor-pointer w-full rounded-lg overflow-hidden">
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt="Advertisement"
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="h-full bg-slate-500" />
      )}

      <div className="absolute mt-[340px] ml-[60px]">
        <Button>Дізнатись більше</Button>
      </div>
    </div>
  );
};

export default AdvertisementAdvancedView;
