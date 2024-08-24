import React from "react";
import { bottom_nav } from "../../lib";

const BottomNav: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 sticky bg-white z-10 bottom-0 py-2 shadow-2xl">
      <nav className="flex items-center justify-evenly">
        {bottom_nav.map((data, index) => (
          <a
            key={index}
            href="/"
            className="flex flex-col gap-1 items-center justify-evenly relative"
          >
            <div className="relative">
              <img src={data.icon} alt={data.title} />
              {data.badge > 0 && (
                <span
                  className={`absolute -top-2.5 -right-5 nav_text font-bold px-1.5 py-0.5 rounded-full ${
                    data.status === "success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {data.badge ? data.badge : null}
                </span>
              )}
            </div>
            <span className="nav_text">{data.title}</span>
          </a>
        ))}
      </nav>
      <div className="closer"></div>
    </section>
  );
};

export default BottomNav;
