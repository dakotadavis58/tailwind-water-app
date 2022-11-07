import React from "react";
import ButtonGroup from "./ButtonGroup";
import Footer from "./Footer";

function BottomNav({ themeColor }) {
  return (
    <div
      className={`${themeColor} h-16 w-full flex flex-col items-center justify-between absolute bottom-0 left-0 z-[1000]`}
    >
      <div className="h-full w-full justify-center items-center flex items md:max-w-3xl">
        <ButtonGroup />
      </div>
    </div>
  );
}

export default BottomNav;
