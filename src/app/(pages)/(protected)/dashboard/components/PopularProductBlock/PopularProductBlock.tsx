import { ProductCard } from "@/_modules/Products/components";
import { Title, List, Button } from "@/_components";
import { useRouter } from "next/navigation";

const productItems = [
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
  },
];
const PopularProductBlock = () => {
  const router = useRouter();

  const onNavigateToProduct = (productId: string) =>
    router.push(`categories/categoryId/products/${productId}`);

  return (
    <div className="mb-[60px]">
      <Title className="mb-5">Популярні продукти</Title>
      <List
        onClick={onNavigateToProduct}
        className="gap-6 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-5"
        items={productItems}
      >
        <ProductCard />
      </List>
      <Button className="mx-auto">Показати ще</Button>
    </div>
  );
};

export default PopularProductBlock;
