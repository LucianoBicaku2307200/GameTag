import React from "react";
import HeroImagePic from "../../assets/HeroImage.jpg";

const HeroImage = ({ text_content }) => {
  return (
    <div
      className="relative flex items-center bg-cover bg-center"
      style={{ height: "300px", backgroundImage: "url(" + HeroImagePic + ")" }}
    >
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.61)" }}
      ></div>
      <h1 className="font-bold text-4xl ml-12 z-10">{text_content}</h1>
    </div>
  );
};

export default HeroImage;
