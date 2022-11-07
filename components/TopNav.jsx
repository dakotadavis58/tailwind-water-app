import React, { useState } from "react";
import SettingsButton from "./SettingsButton";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function TopNav({ handleClick, themeColor }) {
  return (
    <div className={`${themeColor} h-16 w-screen flex justify-center`}>
      <div className="relative h-full w-full flex justify-center items-center md:max-w-3xl">
        <div className=" text-gray-50">
          <div className="absolute right-5 top-2 " onClick={handleClick}>
            <SettingsButton label="Settings" />
          </div>
          <div className="absolute left-5 top-2 ">
            <button className="rounded-full h-14 w-14">
              <MdOutlineArrowBackIosNew
                className="mx-auto my-auto"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
          <h1 className="text-2xl font-semibold">Hydro Homie</h1>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
