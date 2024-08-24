import React from "react";
import age from "../../assets/images/age_image.svg";
import height from "../../assets/images/height_image.svg";
import weight from "../../assets/images/weight_image.svg";
import bmi_image from "../../assets/images/bmi.svg";
import premium_image from "../../assets/images/premium.svg";

type Props = {};

const ProfileCards: React.FC = (props: Props) => {
  return (
    <section className="flex flex-col p-4">
      <div className="triple_cards grid grid-cols-3 gap-2">
        <div className="card flex flex-col items-start justify-center p-2 bg_profile_card rounded-md gap-1">
          <img src={age} alt="card_img" height={18} width={16} />
          <p className="text-white">Возраст</p>
          <p className="text-white">-</p>
        </div>
        <div className="card flex flex-col items-start justify-center p-2 bg_profile_card rounded-md gap-1">
          <img src={height} alt="card_img" height={18} width={16} />
          <p className="text-white">Рост</p>
          <p className="text-white">-</p>
        </div>
        <div className="card flex flex-col items-start justify-center p-2 bg_profile_card rounded-md gap-1">
          <img src={weight} alt="card_img" height={18} width={16} />
          <p className="text-white">Вес</p>
          <p className="text-white">-</p>
        </div>
      </div>
      <div className="double_cards grid grid-cols-2 gap-2 pt-2">
        <div className="card flex flex-col items-start justify-center p-2 bg_profile_card rounded-md gap-1">
          <img src={bmi_image} alt="bmi_img" />
          <p className="text-white">Индекс массы тела</p>
          <p className="text-sm text-white">- (норма)</p>
        </div>
        <div className="card flex flex-col items-start justify-center p-2 bg_right_card_gradient rounded-md gap-1 border border-slate-500">
          <img src={premium_image} alt="premium_img" />
          <p className="text-white">Dawa Premium</p>
          <p className="text-sm text-white">до 12.02.2024</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCards;
