import React from "react";
import SettingsButton from "./SettingsButton";

function TopNav() {
  return (
    <div>
      <div className="bg-purple-600 h-[8vh] w-full flex justify-center items-center text-gray-50 relative">
        <div className="absolute left-5 top-2 ">
          <SettingsButton label="Settings" />
        </div>
        <h1 className="text-2xl font-semibold">Hydro Homie</h1>
      </div>
    </div>
  );
}

export default TopNav;
