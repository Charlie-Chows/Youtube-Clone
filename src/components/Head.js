import React from "react";
import {
  HAMBUGGER_MENU_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
} from "../utils/constant";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">

      <div className=" flex col-span-1 ">
        <img alt="Hambugger-Menu" src={HAMBUGGER_MENU_ICON} className="h-8" />
        <img alt="Youtube-Logo" src={YOUTUBE_LOGO} className="h-8 mx-2" />
      </div>

      <div className=" col-span-10 flex items-center justify-center">
        <input type="text" className=" w-1/2 border border-gray-400 p-2 rounded-l-full" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"> 🔍</button>
      </div>

      <div className="col-span-1 roun">
        <img alt="User-Icon" src={USER_ICON} className=" h-8" />
      </div>
    </div>
  );
};

export default Head;
