import React from "react";
import { GiWaterDrop } from "react-icons/gi";

function ButtonGroup() {
  return (
    <div className="absolute left-[15%] bottom-5 w-2/3 max-w-3xl flex justify-between items-center">
      <button className="rounded-full bg-purple h-12 w-16">Side</button>
      <button className="rounded-full bg-purple h-20 w-20 flex justify-center items-center">
        <div className="">
          <GiWaterDrop style={{ width: "30px", height: "30px" }} />
        </div>
      </button>
      <button className="rounded-full bg-purple h-12 w-16">Side</button>
    </div>
  );
}

export default ButtonGroup;
