import { ProductCard } from "@/_modules/Products/components";
import { Title, List, Button, Text } from "@/_components";
import { useRouter } from "next/navigation";

const productItems = [
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "вживаний",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "вживаний",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "вживаний",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "вживаний",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "новий",
  },
  {
    title: "Назва продукта",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
    price: 200,
    location: "Хмельницький",
    date: "21.12.2024",
    condition: "вживаний",
  },
];
const PopularProductBlock = () => {
  const router = useRouter();

  const onNavigateToProduct = (productId: string) =>
    router.push(`categories/categoryId/products/${productId}`);

  return (
    <div className="mb-[60px]">
      <Title level={3} className="mb-6">
        Популярні продукти
      </Title>
      <List
        onClick={onNavigateToProduct}
        className="gap-5 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-7"
        items={productItems}
      >
        <ProductCard />
      </List>
      <Text
        level={1}
        weight="normal"
        variant="primary"
        className="w-full block text-center cursor-pointer hover:text-primary-darken-2 "
      >
        Показати ще
      </Text>
    </div>
  );
};

export default PopularProductBlock;
