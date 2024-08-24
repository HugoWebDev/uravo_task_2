import React from "react";
import Image_Dark from "../../assets/images/right_side_light.svg";
import Image_Light from "../../assets/images/right_side_dark.svg";

type Props = {
  theme: string;
};

const StatusBar: React.FC<Props> = ({ theme }: Props) => {
  return (
    <div className="flex items-center justify-between p-3 px-8 m-0 w-100 bg-inherit">
      <span className={theme === "dark" ? "text-white" : "text-black"}>
        9:41
      </span>
      <img
        src={theme === "dark" ? Image_Dark : Image_Light}
        alt="right_side_nav"
      />
    </div>
  );
};

export default StatusBar;
