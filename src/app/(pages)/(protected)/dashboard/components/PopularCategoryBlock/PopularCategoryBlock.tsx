import { Title, List } from "@/_components";
import { CategoryCard } from "@/_modules/Categories/components";
import accessoriesAndJewelry from "@/_assets/popularCategory/accessoriesAndJewelry.svg";
import babyProducts from "@/_assets/popularCategory/babyProducts.svg";
import beautyAndHealth from "@/_assets/popularCategory/beautyAndHealth.svg";
import car from "@/_assets/popularCategory/car.svg";
import clothing from "@/_assets/popularCategory/clothing.svg";
import electronics from "@/_assets/popularCategory/electronics.svg";
import giftsAndHobbies from "@/_assets/popularCategory/giftsAndHobbies.svg";
import home from "@/_assets/popularCategory/home.svg";
import petSupplies from "@/_assets/popularCategory/petSupplies.svg";
import realEstate from "@/_assets/popularCategory/realEstate.svg";
import spareParts from "@/_assets/popularCategory/spareParts.svg";
import sports from "@/_assets/popularCategory/sports.svg";

const categoryItems = [
  {
    text: "Електроніка",
    imgUrl: electronics,
  },
  {
    text: "Дім і сад",
    imgUrl: home,
  },
  {
    text: "Нерухомість",
    imgUrl: realEstate,
  },
  {
    text: "Одяг і взуття",
    imgUrl: clothing,
  },
  {
    text: "Авто",
    imgUrl: car,
  },

  {
    text: "Дитячі Товари",
    imgUrl: babyProducts,
  },
  {
    text: "Краса та здоров'я",
    imgUrl: beautyAndHealth,
  },
  {
    text: "Подарунки та хобі",
    imgUrl: giftsAndHobbies,
  },
  {
    text: "Аксесуари та прикраси",
    imgUrl: accessoriesAndJewelry,
  },
  {
    text: "Спорт та відпочинок",
    imgUrl: sports,
  },
  {
    text: "Запчастини",
    imgUrl: spareParts,
  },
  {
    text: "Зоотовари",
    imgUrl: petSupplies,
  },
];

const PopularCategoryBlock = () => {
  return (
    <>
      <Title level={3} className="mb-6">
        Популярні категорії
      </Title>
      <List
        items={categoryItems}
        className="gap-5 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-20"
      >
        <CategoryCard />
      </List>
    </>
  );
};

export default PopularCategoryBlock;
