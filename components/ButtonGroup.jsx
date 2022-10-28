import React from "react";
import { GiWaterDrop } from "react-icons/gi";

function ButtonGroup() {
  return (
    <div className="w-2/3 max-w-xl flex justify-between items-center">
      <button className="rounded-full bg-blue-400 h-12 w-16">Side</button>
      <button className="rounded-full bg-blue-400 h-14 w-20 ">
        <GiWaterDrop
          className="mx-auto"
          style={{ width: "30px", height: "30px" }}
        />
      </button>
      <button className="rounded-full bg-blue-400 h-12 w-16">Side</button>
    </div>
  );
}

export default ButtonGroup;
