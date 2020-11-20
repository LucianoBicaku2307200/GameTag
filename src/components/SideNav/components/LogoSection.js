import React from "react";
import Logo from "../../../assets/logo-white.svg";
const LogoSection = () => {
  return (
    <div className="flex flex-col items-center m-10">
      <img src={Logo} alt="gameTag" />
      <h1 className="font-medium text-2xl cursor-default">Game Tag</h1>
    </div>
  );
};

export default LogoSection;
