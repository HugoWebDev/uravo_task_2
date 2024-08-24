import React from "react";
import green_star_image from "../../assets/images/green_star_card.svg";
import CardCarousel from "../utils/card_carousel";

type Props = {
  images: string[];
  image_info: string;
  title: string;
  rating: number;
  description: string;
};

const ProductCard: React.FC<Props> = ({
  images,
  image_info,
  title,
  rating,
  description,
}) => {
  return (
    <article className="card m-4 rounded-md shadow-xl">
      <CardCarousel images={images} image_info={image_info} />
      <div className="card_info font-semibold flex items-center justify-start gap-2 p-2">
        <h2 className="text-sm p-0 m-0">{title}</h2>
        <span className="text-slate-400">|</span>
        <img src={green_star_image} alt="star" height={19} width={19} />
        <span>{rating}</span>
      </div>
      <p className="px-3 pb-3 text-slate-500">{description}</p>
    </article>
  );
};

export default ProductCard;
