import Image from "next/image";
import React, { useState } from "react";
import happyFace from "../public/assets/normal-happy.png";
import sadFace from "../public/assets/crying.png";
import homieOutline from "../public/assets/hydro-homie-outline.png";
import homieFilled from "../public/assets/homie-filled.svg";
// @refresh reset
function Homie2() {
  const [face, setFace] = useState("happyFace");
  const sadFaceTopPos = "top-[50%]";
  return (
    <section className="">
      <div className="relative">
        <Image
          className=""
          src={homieOutline}
          alt="hydro homie"
          width={360}
          height={490}
          priority
          objectFit="contain"
        />
        <div className="absolute top-0 left-0">
          <div className="mask w-[360px] h-[490px]">
            <div className="water h-full w-full absolute bottom-5 left-8 -z-50 "></div>
          </div>
        </div>
        <div className="absolute top-[46%] left-[27%] z-50">
          <Image
            src={face === "happyFace" ? happyFace : sadFace}
            alt="face"
            width={160}
            height={125}
          />
        </div>
        <div className="relative">
          <div className="waterBlock absolute h-[300px] w-[100px] bottom-[10px] -left-[54px] -rotate-[7.5deg] -z-10"></div>
          <div className="waterBlock absolute h-[300px] w-[100px] bottom-[10px] -right-[51px] rotate-[7.5deg] -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Homie2;
