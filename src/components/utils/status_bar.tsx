import React from "react";
import Image from "../../assets/images/right_side_light.svg";

type Props = {};

const StatusBar: React.FC = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-3 px-8 m-0 w-100 bg-inherit">
      <span className="text-white">9:41</span>
      <img src={Image} alt="right_side_nav" />
    </div>
  );
};

export default StatusBar;
