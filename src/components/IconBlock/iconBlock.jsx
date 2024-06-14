import { ReactComponent as BarIcon } from "../../icons/Bar.svg";
import { ReactComponent as ChefIcon } from "../../icons/chef.svg";
import { ReactComponent as DesertIcon } from "../../icons/Desert.svg";
import { ReactComponent as DrinkIcon } from "../../icons/Drink.svg";
import { ReactComponent as MainDishesIcon } from "../../icons/Main_dishes.svg";
import { ReactComponent as SauceIcon } from "../../icons/Sauce.svg";
import { ReactComponent as SoupIcon } from "../../icons/Soup.svg";

import "./iconBlock.scss";

const icons = [
  { component: <BarIcon />, label: "Бар" },
  { component: <ChefIcon />, label: "Від шефа" },
  { component: <DesertIcon />, label: "Десерти" },
  { component: <DrinkIcon />, label: "Напої" },
  { component: <MainDishesIcon />, label: "Основні страви" },
  { component: <SoupIcon />, label: "Перші страви" },
  { component: <SauceIcon />, label: "Соуси" },
];

const IconBlock = () => {
  return (
    <div className="icon-block">
      {icons.map((icon, index) => (
        <div key={index} className="icon-block__item">
          {icon.component}
          <p>{icon.label}</p>
        </div>
      ))}
    </div>
  );
};

export default IconBlock;
