import Image from "next/image";
import React, { useState } from "react";
import happyFace from "../public/assets/normal-happy.png";
import sadFace from "../public/assets/crying.png";
import homieOutline from "../public/assets/hydro-homie-outline.png";
import homieFilled from "../public/assets/homie-filled.svg";
// @refresh reset
function Homie() {
  const [face, setFace] = useState("happyFace");
  const sadFaceTopPos = "top-[50%]";

  const handleClick = () => {
    console.log("clicked homie");
  };

  return (
    <section className="">
      <div className="relative" onClick={() => handleClick()}>
        <Image
          className=""
          src={homieOutline}
          alt="hydro homie"
          width={360}
          height={490}
          priority
          objectFit="contain"
        />
        <div className="absolute top-[46%] left-[27%] z-50">
          <Image
            src={face === "happyFace" ? happyFace : sadFace}
            alt="face"
            width={160}
            height={125}
          />
        </div>
        <div className="absolute">
          {/* max height  */}
          <div className="water max-h-[280px] h-[200px] w-[250px] absolute bottom-5 left-8 -z-50 "></div>
          <div className="relative">
            <div className="waterBlock left-[3px] rotate-[-5.5deg]"></div>
            <div className="waterBlock absolute right-[-355px] rotate-[5.5deg] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homie;
