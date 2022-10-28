import Image from "next/image";
import React from "react";
import happyFace from "../public/assets/normal-happy.png";
import homieOutline from "../public/assets/hydro-homie-outline.png";
// @refresh reset
function Homie() {
  return (
    <section className="">
      <div className="relative ">
        <Image
          className="w-[300px]"
          src={homieOutline}
          alt="hydro homie"
          width={300}
          height={500}
          priority
        />
        <div className="absolute top-[46%] left-[20%] z-50">
          <Image src={happyFace} alt="face" width={180} height={125} />
        </div>
        <div className="water h-[200px] w-[250px] absolute bottom-5 left-8 -z-50 "></div>
        <div className="relative">
          <div className="waterBlock absolute h-[300px] w-[100px] bottom-[10px] -left-[54px] -rotate-[7.5deg] -z-10"></div>
          <div className="waterBlock absolute h-[300px] w-[100px] bottom-[10px] -right-[51px] rotate-[7.5deg] -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Homie;
