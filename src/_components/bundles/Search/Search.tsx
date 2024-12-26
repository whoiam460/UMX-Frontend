import { Button, Input } from "@/_components";
import { MdOutlineSearch } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import clsx from "clsx";
import React from "react";

type SearchProps = {
  className?: string;
};

// TODO: Change hex color to color config when it will be ready
const Search: React.FC<SearchProps> = ({ className }) => {
  const wrapperClasses = clsx("flex items-end  w-[75%]  mx-auto", className);

  return (
    <div className={wrapperClasses}>
      <div className="flex border-b-2 w-full border-[#002349]">
        <div className="w-[75%]">
          <Input
            placeholder="Що шукаєте?"
            icon={<MdOutlineSearch className="text-[40px] text-[#002349]" />}
          />
        </div>
        <div className="w-[30%]">
          <Input
            placeholder="Вся Україна"
            icon={<GrLocation className="text-[40px] text-[#002349]" />}
          />
        </div>
      </div>
      <Button className="max-h-[44px] text-white bg-[#002349] px-12 ml-[-6px]">
        Знайти
      </Button>
    </div>
  );
};

export default Search;
