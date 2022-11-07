import React from "react";
import { IoWaterSharp, IoStatsChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TbQuestionMark } from "react-icons/tb";

function ButtonGroup(props) {
  return (
    <div className="h-full w-[90%] flex justify-between items-center">
      <button>
        <IoStatsChart className="text-white h-8 w-8" />
      </button>
      <button>
        <IoWaterSharp className="text-white h-8 w-8" />
      </button>
      <button>
        <IoMdSettings className="text-white h-8 w-8" />
      </button>
      <button>
        <TbQuestionMark className="text-white h-8 w-8" />
      </button>
    </div>
  );
}

export default ButtonGroup;
