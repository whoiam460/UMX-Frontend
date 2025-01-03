"use client";

import React, { ReactElement } from "react";
import clsx from "clsx";

type ListProps<T> = {
  items: T[];
  children: ReactElement;
  className?: string;
  onClick?: any;
};

const List = <
  T extends {
    _id?: string;
    imgUrl?: string;
    text?: string;
    title?: string;
    onClick?: void;
  }
>({
  items,
  children,
  className,
  onClick,
}: ListProps<T>) => {
  const listClasses = clsx("grid w-full", className);

  return (
    <ul className={listClasses}>
      {items?.map((item, index) => (
        <li key={item?._id || index}>
          {React.cloneElement(children, {
            ...item,
            index,
            // TODO: Change item?.title, to item?._id
            onClick: () => onClick?.(item?.title),
          })}
        </li>
      ))}
    </ul>
  );
};

export default List;
