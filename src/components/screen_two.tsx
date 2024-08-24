import React, { useRef, useState } from "react";
import chevron_left from "../assets/images/chevron_left.svg";
import close_search_bar_text from "../assets/images/close_search_bar_text.svg";
import search_bar_icon from "../assets/images/search_bar_icon.svg";
import ProductCard from "../components/utils/product_card";
import { products } from "../lib";
import { StatusBar } from "./utils";

const ScreenTwo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => inputRef.current?.focus();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleCloseIconClick = () => {
    setInputValue("");
    inputRef.current?.blur();
  };

  return (
    <section id="max_width_container" className="shadow-md relative">
      <div className={`flex flex-col w-full width_22 z-10 fixed bg-white`}>
        <StatusBar theme="light" />
        <form className="flex items-center justify-center p-3 gap-2" action="/">
          <a href="/">
            <img src={chevron_left} height={18} width={26} alt="chevron_left" />
          </a>
          <div className="flex items-center justify-between bg_search_input w-full p-2 rounded-md">
            <img
              src={search_bar_icon}
              alt="search_icon"
              onClick={handleSearchIconClick}
              className="cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg_search_input w-full px-2"
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue && (
              <img
                src={close_search_bar_text}
                alt="closer_icon"
                onClick={handleCloseIconClick}
                className="cursor-pointer"
              />
            )}
          </div>
        </form>
      </div>

      <div className="pt-24">
        {products.map((product) => (
          <ProductCard
            images={product.images}
            image_info={product.image_info}
            title={product.title}
            rating={product.star}
            description={product.address}
          />
        ))}
      </div>
    </section>
  );
};

export default ScreenTwo;
