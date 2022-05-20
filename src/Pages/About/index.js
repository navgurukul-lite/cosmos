import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Team";
import Projects from "../../Components/Projects";
const index = () => {
  return (
    <div>
      <Navbar />
      <section class="text-gray-100 bg-gray-900 pt-5 lg:pt-28 h-screen body-font overflow-hidden">
        <div class="container px-5 py-0 lg:py-24 mx-auto flex justify-between flex-col-reverse lg:flex-row">
          <div class="pl-0 lg:pl-20 w-full lg:w-3/5 animate__animated animate__bounceInLeft animate__slow py-0 lg:py-24">
            <h1 class="text-xl lg:text-4xl w-full lg:w-4/5 ">
              The Gurukul for the New Age India and its New Generation
            </h1>
            <p class="mt-4 w-full lg:w-3/5">
              We are a non-profit dedicated to bring affordable tech education
              to underprivileged girls in India
            </p>
          </div>
          <div class="w-full lg:w-2/5 animate__animated animate__bounceInRight animate__slow">
            <img src="/person-coding.png" alt="Person coding" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
