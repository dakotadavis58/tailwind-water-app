import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Sidemenu() {
  const { data } = useSession();
  return (
    <div className="h-full w-full text-slate-100">
      {/* profile info */}
      <div className="flex flex-col items-center p-5 space-y-2">
        <div className="rounded-full">
          <Image
            className="rounded-full"
            src={data?.user?.image}
            alt="hydro homie"
            width={80}
            height={80}
            priority
            objectFit="contain "
          />
        </div>
        <p>{data?.user?.name}</p>
        <p>{data?.user?.email}</p>
      </div>
      {/* button group for color pickers */}
      <div
        className="flex max-w-sm mx-auto justify-between"
        id="color-btn-group"
      >
        <button className="rounded-full h-8 w-8 bg-purple outline-2 outline outline-slate-700 outline-offset-2 focus:bg-black"></button>
        <button className="rounded-full h-8 w-8 bg-blue outline-2 outline outline-slate-700 outline-offset-2"></button>
        <button className="rounded-full h-8 w-8 bg-red outline-2 outline outline-slate-700 outline-offset-2"></button>
        <button className="rounded-full h-8 w-8 bg-green outline-2 outline outline-slate-700 outline-offset-2"></button>
      </div>
    </div>
  );
}

export default Sidemenu;
