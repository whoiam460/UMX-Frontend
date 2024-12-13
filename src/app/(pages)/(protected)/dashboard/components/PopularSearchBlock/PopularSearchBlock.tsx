import { Title, Tag, List } from "@/_components";

const items = [
  {
    text: "Кросівки зимові",
  },
  {
    text: "Кросівки чоловічі",
  },
  {
    text: "Зимові кросівки зимові",
  },
  {
    text: "Чоловіче зимове взуття",
  },
  {
    text: "Уггі жіночі",
  },
  {
    text: "Термобілизна",
  },
  {
    text: "Новорічні прикраси ",
  },
  {
    text: "Гірлянди",
  },
  {
    text: "Декор",
  },
  {
    text: "Ялинка",
  },
  {
    text: "Кросівки зимові",
  },
  {
    text: "Кросівки чоловічі",
  },
  {
    text: "Зимові кросівки зимові",
  },
  {
    text: "Чоловіче зимове взуття",
  },
  {
    text: "Уггі жіночі",
  },
  {
    text: "Термобілизна",
  },
  {
    text: "Новорічні прикраси ",
  },
  {
    text: "Гірлянди",
  },
  {
    text: "Декор",
  },
  {
    text: "Ялинка",
  },
  {
    text: "Кросівки зимові",
  },
  {
    text: "Кросівки чоловічі",
  },
  {
    text: "Зимові кросівки зимові",
  },
  {
    text: "Чоловіче зимове взуття",
  },
  {
    text: "Уггі жіночі",
  },
  {
    text: "Термобілизна",
  },
  {
    text: "Новорічні прикраси ",
  },
  {
    text: "Гірлянди",
  },
  {
    text: "Декор",
  },
  {
    text: "Ялинка",
  },
];

const PopularSearchBlock = () => {
  return (
    <div className="mb-20">
      <Title className="mb-5">Популярні пошуки</Title>
      <List className="!flex flex-wrap gap-2" items={items}>
        <Tag />
      </List>
    </div>
  );
};

export default PopularSearchBlock;
