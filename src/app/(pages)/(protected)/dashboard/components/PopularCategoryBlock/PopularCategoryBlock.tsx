import { Title, List } from "@/_components";

import { CategoryCard } from "@/_modules/Categories/components";

const categoryItems = [
  {
    text: "Хоббі і спорт",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Електроніка",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Хоббі і спорт",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Електроніка",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Дитячі товари ",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },

  {
    text: "Хоббі і спорт",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Електроніка",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Дитячі товари ",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Авто",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Електроніка",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Дитячі товари ",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    text: "Авто",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
];

const PopularCategoryBlock = () => {
  return (
    <>
      <Title className="mb-5">Популярні категорії</Title>
      <List
        items={categoryItems}
        className="gap-6 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-20"
      >
        <CategoryCard />
      </List>
    </>
  );
};

export default PopularCategoryBlock;
