import React, { useEffect, useState } from "react";
import styles from "../utils/styles/carousel.module.css";

type Props = {
  images: string[];
  image_info: string;
};

const CardCarousel: React.FC<Props> = ({ images, image_info }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={`${styles.carouselItem} relative`}>
            <img src={image} alt={`carousel_image_${index}`} />
            <span className="text-white bg-slate-500 absolute py-1 px-2 top-2 right-2 rounded-md">
              {image_info}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              activeIndex === index ? styles.active : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
