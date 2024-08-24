import home from "../assets/images/home.svg";
import search from "../assets/images/search.svg";
import establishments from "../assets/images/establishments.svg";
import phone_number from "../assets/images/phone_number.svg";
import medical_card from "../assets/images/medical_card.svg";

type nav_data = {
  icon: string;
  title: string;
  badge: number;
  status: string;
};

export const bottom_nav: nav_data[] = [
  {
    icon: home,
    title: "Главная",
    badge: 0,
    status: "success",
  },
  {
    icon: establishments,
    title: "Заведения",
    badge: 0,
    status: "success",
  },
  {
    icon: search,
    title: "Поиск",
    badge: 0,
    status: "success",
  },
  {
    icon: phone_number,
    title: "Теле мед.",
    badge: 2,
    status: "alert",
  },
  {
    icon: medical_card,
    title: "Мед. карта",
    badge: 2,
    status: "alert",
  },
];
