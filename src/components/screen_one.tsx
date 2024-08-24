import React from "react";
import { rows } from "../lib";
import { ProfileCards, ProfileData, StatusBar } from "./utils";
import BottomNav from "./utils/bottom_nav";
import { RowData } from "./utils";
import styles from "./utils/styles/status_bar.module.css";

const ScreenOne: React.FC = () => {
  return (
    <section id="max_width_container" className="shadow-md relative rounded-md">
      <div
        className={`flex flex-col w-full bg_gradient_blue width_22 z-10 fixed ${styles.height_status_bar}`}
      >
        <StatusBar theme="dark" />
        <ProfileData />
        <ProfileCards />
      </div>
      <article
        className="mt_special mx-5 mb-32 rounded-xl py-2"
        style={{ boxShadow: "0px 6px 24px 0px rgba(136, 152, 170, 0.08)" }}
      >
        {rows.map((data, index) => (
          <RowData
            key={index}
            icon={data.icon}
            title={data.title}
            badge={data.badge}
            status={data.status}
          />
        ))}
      </article>
      <BottomNav />
    </section>
  );
};

export default ScreenOne;
