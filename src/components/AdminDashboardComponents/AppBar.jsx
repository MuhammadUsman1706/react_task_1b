import React from "react";

import classes from "./AppBar.module.css";

const AppBar = ({ logout }) => {
  return (
    <div className={classes["app-bar"]}>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        APP
      </h1>
      <button onClick={logout} className="text-black font-bold py-4 px-6">
        Logout
      </button>
    </div>
  );
};

export default AppBar;
