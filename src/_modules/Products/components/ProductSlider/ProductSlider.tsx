"use client";

import React, { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import clsx from "clsx";
import Image from "next/image";

interface ProductSliderProps {
  images: string[];
  className: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const thumbsSliderRef = useRef<HTMLDivElement | null>(null);

  const wrapperClasses = clsx("product-slider-container", className);

  const handleMouseWheel = (event: React.WheelEvent) => {
    console.log("aaa");
    if (thumbsSliderRef.current) {
      thumbsSliderRef.current.scrollTop += event.deltaY;
    }
  };

  return (
    <div className={wrapperClasses}>
      <div
        ref={thumbsSliderRef}
        onWheel={handleMouseWheel}
        className="thumbs-slider"
      >
        <Swiper
          className="h-full "
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                fill
                className="rounded-lg h-full w-full"
                src={image}
                alt={`Мініатюра ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="main-slider">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          navigation
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                quality={95}
                fill
                className="rounded-lg h-full w-full"
                src={image}
                alt={`Зображення ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
