"use client";

import {
  AdvertisementBlock,
  PopularCategoryBlock,
  PopularProductBlock,
  PopularSearchBlock,
} from "./components";
import { Container } from "@/_components";

const Dashboard = () => {
  return (
    <>
      <Container>
        <AdvertisementBlock />
        <PopularCategoryBlock />
        <PopularProductBlock />
        <PopularSearchBlock />
      </Container>
      <div className="h-[180px] w-full bg-[#D9D9D9]">
        <Container>sdfdsfds</Container>
      </div>
    </>
  );
};

export default Dashboard;
