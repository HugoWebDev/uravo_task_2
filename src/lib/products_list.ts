import clinic_image_1 from "../assets/images/medical_clinic_1.jpg";
import clinic_image_2 from "../assets/images/medical_clinic_2.jpg";
import clinic_image_3 from "../assets/images/medical_clinic_3.webp";
import clinic_image_4 from "../assets/images/medical_clinic_4.jpg";

type product_data = {
  images: string[];
  image_info: string;
  title: string;
  star: number;
  address: string;
};

export const products: product_data[] = [
  {
    images: [clinic_image_1, clinic_image_4, clinic_image_2, clinic_image_3],
    image_info: "Частная клиника",
    title: "AKFA Medline",
    star: 4.9,
    address: "г.Ташкент, Мирабадский район, Фидокор 38-10",
  },
  {
    images: [clinic_image_1, clinic_image_4, clinic_image_2, clinic_image_3],
    image_info: "Shox International Hospital",
    title: "AKFA Medline",
    star: 4.9,
    address: "г.Ташкент, Мирабадский район, Чехов 12",
  },
  {
    images: [clinic_image_3, clinic_image_1, clinic_image_2, clinic_image_4],
    image_info: "Частная клиника",
    title: "AKFA Medline",
    star: 4.9,
    address: "г.Ташкент, Мирабадский район, Фидокор 38-10",
  },
  {
    images: [clinic_image_2, clinic_image_1, clinic_image_3, clinic_image_4],
    image_info: "Частная клиника",
    title: "AKFA Medline",
    star: 4.9,
    address: "г.Ташкент, Мирабадский район, Фидокор 38-10",
  },
  {
    images: [clinic_image_1, clinic_image_2, clinic_image_3, clinic_image_4],
    image_info: "Частная клиника",
    title: "AKFA Medline",
    star: 4.9,
    address: "г.Ташкент, Мирабадский район, Фидокор 38-10",
  },
];
