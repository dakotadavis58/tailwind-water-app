import Image from "next/image";
import React from "react";
import bar from "../public/assets/water-bar.svg";

function ProgressBar() {
  return (
    <div className="">
      <div className="absolute top-4 centerBar flex flex-col justify-center items-center">
        <div className="progress">
          <div className="barOverflow">
            <div className="bar"></div>
          </div>
          <span>56.5</span>%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
