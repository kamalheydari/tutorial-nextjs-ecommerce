import React from "react";

import Navbar from "./Navbar";
import Notify from "./Notify";

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Navbar />
      <Notify />
      {children}
    </div>
  );
}
