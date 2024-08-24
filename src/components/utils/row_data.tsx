import React from "react";

type RowDataProps = {
  icon: string;
  title: string;
  badge: number;
  status: string;
};

const RowData: React.FC<RowDataProps> = ({ icon, title, badge, status }) => {
  return (
    <div className="relative flex items-center m-2 ms-12 p-2 border-b">
      <img
        src={icon}
        alt="icon"
        className="absolute table_icon"
        style={{ left: `-2rem` }}
      />
      <span className="font-semibold">{title}</span>
      <span
        className={`${
          status === "success"
            ? "bg_badge_success"
            : "bg_badge_alert text-white"
        } absolute py-0 px-1.5 rounded-md`}
        style={{ right: `0.5rem` }}
      >
        {badge > 0 ? badge : null}
      </span>
    </div>
  );
};

export default RowData;
