import React from "react";
import ButtonGroup from "./ButtonGroup";
import Footer from "./Footer";
import Head from "./Head";
import TopNav from "./TopNav";

function Layout({ title, children }) {
  return (
    <div className="h-screen w-screen">
      <div className="max-h-screen min-h-screen flex flex-col">
        <Head title={title} />
        <TopNav />
        <div className="min-h-[70vh] w-full flex justify-center items-center">
          {children}
        </div>
        <div className="bg-purple-600 min-h-[50px] h-[14vh] w-full flex flex-col items-center justify-between pt-4">
          <ButtonGroup />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
