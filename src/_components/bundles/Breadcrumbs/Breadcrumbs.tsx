"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Text } from "@/_components";
import clsx from "clsx";
import { IoIosArrowForward } from "react-icons/io";
import { capitalizeFirstLetter } from "@/_helpers";

interface BreadcrumbItem {
  label: string;
  href: string;
}

type BreadcrumbProps = {
  className?: string;
};

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ className }) => {
  const pathname = usePathname();

  const wrapperClasses = clsx("flex items-center", className);

  const breadcrumbs: BreadcrumbItem[] = pathname
    ?.split("/")
    ?.filter(Boolean)
    ?.map((segment, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`;
      return {
        label: capitalizeFirstLetter(decodeURIComponent(segment)),
        href,
      };
    });

  return (
    <div className={wrapperClasses}>
      <ul className="flex items-center">
        {breadcrumbs?.map((crumb, index) => (
          <li key={index} className="flex items-center ">
            {index !== breadcrumbs.length - 1 ? (
              <a href={crumb.href} className="hover:underline">
                <Text className="text-[20px] text-gray-600  ">
                  {crumb.label}
                </Text>
              </a>
            ) : (
              <Text className=" text-[20px]">{crumb.label}</Text>
            )}
            {index !== breadcrumbs.length - 1 && (
              <IoIosArrowForward className="my-auto mx-5 text-[18px] fill-black" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
