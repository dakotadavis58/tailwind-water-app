import React, { useContext, useState } from "react";
import { ThemeContext } from "../themeContext";
import BottomNav from "./BottomNav";
import ExtraButtons from "./ExtraButtons";

import Head from "./Head";
import ProgressBar from "./ProgressBar";
import Sidemenu from "./Sidemenu";
import TopNav from "./TopNav";

function Layout({ title, children }) {
  const { state } = useContext(ThemeContext);
  const { isDarkTheme, themeColor } = state;

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="h-screen max-w-7xl flex">
      <div className="max-h-screen min-h-screen flex flex-col relative">
        <Head title={title} />
        <TopNav handleClick={handleClick} themeColor={themeColor} />

        <div
          className={`absolute transition ${
            clicked && "slideIn"
          } top-16 h-[87.5vh] w-screen ${themeColor} z-[80]`}
        >
          <Sidemenu />
        </div>

        <ProgressBar />
        <div className="min-h-[70vh] w-full flex justify-center items-center">
          <main className="min-h-[80vh] flex justify-center items-center">
            {children}
          </main>
        </div>
        <div className="flex justify-center w-screen mb-4 absolute bottom-20">
          <ExtraButtons themeColor={themeColor} />
        </div>
        <BottomNav themeColor={themeColor} />
      </div>
    </div>
  );
}

export default Layout;
