import React from "react";
import Navbar from "./Navbar";
import DaisyNav from "./DaisyNav";
import Prices from "./Prices";
import Chart from "./Chart";
import Loader from "./Loader";

export default function App() {
  return (
    <div>
      {/* <DaisyNav /> */}
      <Navbar />
      <Prices />
      <Chart />
      <Loader />
    </div>
  );
}
