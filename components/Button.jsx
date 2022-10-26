import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Button({ label }) {
  return (
    <button className=" absolute left-5 top-5 rounded-full bg-orange h-14 w-14 flex justify-center items-center">
      <GiHamburgerMenu style={{ width: "30px", height: "30px" }} />
    </button>
  );
}

export default Button;
