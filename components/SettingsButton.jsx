import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function SettingsButton({ label }) {
  return (
    <button className="rounded-full bg-orange h-14 w-14 flex justify-center items-center">
      <GiHamburgerMenu style={{ width: "30px", height: "30px" }} />
    </button>
  );
}

export default SettingsButton;
