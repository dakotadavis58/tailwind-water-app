import React, { useContext, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AppContext } from "../context";

function ExtraButtons({ themeColor }) {
  const state = useContext(AppContext);
  return (
    <div className="flex justify-between w-[80%] md:max-w-2xl">
      <button
        className={`${themeColor} text-white rounded-full h-12 w-12 flex justify-center items-center`}
      >
        <RiArrowGoBackFill className="h-6 w-6" />
      </button>
      <button
        className={`${themeColor} text-white rounded-full h-12 w-12 flex justify-center items-center`}
      >
        {state.ounces}
      </button>
    </div>
  );
}

export default ExtraButtons;
