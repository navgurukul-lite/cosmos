import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Team";
import Projects from "../../Components/Projects";
const index = () => {
  return (
    <div>
      <Navbar />
      {/* <Projects/> */}
      <Hero />
      <Footer />
    </div>
  );
};

export default index;
