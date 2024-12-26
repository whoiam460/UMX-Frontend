import { List } from "@/_components";

import { AdvertisementAdvancedView } from "@/_modules/Advertisement/components";

const AdvertisementItems = [
  {
    title: "edsfdsf",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
  {
    title: "edsfds2342f",
    imgUrl:
      "https://zdnemnarodzhennja.com/wp-content/uploads/2024/08/pryvitannya-z-dnem-narodzhennya-svoyimy-slovamy.jpg",
  },
];

const AdvertisementBlock = () => {
  return (
    <List
      items={AdvertisementItems}
      className="gap-6 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 mb-20"
    >
      <AdvertisementAdvancedView />
    </List>
  );
};

export default AdvertisementBlock;
