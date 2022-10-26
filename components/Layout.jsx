import React from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Footer from "./Footer";
import Head from "./Head";

function Layout({ title, children }) {
  return (
    <div className="h-screen w-screen flex-col justify-center items-center ">
      <div className="relative h-[95%] w-full max-w-2xl self-center">
        <div className="absolute bg-green h-28 w-full rounded-b-[50%]"></div>
        <Head title={title} />
        <Button label="Settings" />
        <div className="w-full h-full flex justify-center items-center">
          {children}
        </div>
        <ButtonGroup />
      </div>
      <div className="bg-green h-[20vh] w-full absolute bottom-0 left-0 -z-20 rounded-t-[50%]"></div>
      <Footer />
    </div>
  );
}

export default Layout;
