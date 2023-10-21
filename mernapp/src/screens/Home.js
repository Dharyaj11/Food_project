import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <div>
        
        <Navbar></Navbar>
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Cards></Cards>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
