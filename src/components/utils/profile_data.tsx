import React from "react";
import avatar from "../../assets/images/avatar.svg";
import button from "../../assets/images/edit_btn.svg";

type Props = {};

const ProfileData: React.FC = (props: Props) => {
  return (
    <section className="flex items-center justify-between pt-3 pb-1 px-4">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt="avatar"
          height="48"
          width="48"
          className="border-0 rounded-full"
        />
        <span className="text-white text-md leading-4 font-semibold text-base">
          Test Testov
        </span>
      </div>
      <button className="btn">
        <img src={button} alt="edit_button" />
      </button>
    </section>
  );
};

export default ProfileData;
