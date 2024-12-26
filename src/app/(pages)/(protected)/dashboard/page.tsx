"use client";

import {
  AdvertisementBlock,
  PopularCategoryBlock,
  PopularProductBlock,
  PopularSearchBlock,
} from "./components";
import { Container, Search, Text } from "@/_components";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Search className="mb-11" />
        <AdvertisementBlock />
        <PopularCategoryBlock />
        <PopularProductBlock />
        <PopularSearchBlock />
      </Container>
      <div className="h-[180px] w-full bg-white">
        <Container>
          <Text>sdfdsfds</Text>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
