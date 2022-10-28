import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function SettingsButton({ label }) {
  return (
    <button className="rounded-full h-14 w-14">
      <GiHamburgerMenu
        className="mx-auto my-auto"
        style={{ width: "24px", height: "24px" }}
      />
    </button>
  );
}

export default SettingsButton;
