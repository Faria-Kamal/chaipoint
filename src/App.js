import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Welcome from "./components/welcome/Welcome";
import BestSellers from "./components/best sellers/BestSellers";
import Gift from "./components/gift/Gift";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Welcome />
      <BestSellers />
      <Gift />
    </div>
  );
};

export default App;
