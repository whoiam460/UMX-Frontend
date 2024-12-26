import { Container, Text, Title, Search, Breadcrumbs } from "@/_components";
import { ProductSlider } from "@/_modules/Products/components";

const images = [
  "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
];

const ProductPage = () => {
  return (
    <Container>
      <Search className="mb-11" />
      <Breadcrumbs className="mb-7" />
      <div className="flex">
        <ProductSlider className="w-8/12 mr-5" images={images} />
        <div>
          <Title>Назва ТОвару </Title>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
