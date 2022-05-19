import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axios from "axios";
import "./style.css";

const Index = () => {
  return (
    <div>
      <Navbar />

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white animate__animated animate__lightSpeedInRight">
              Mentorship Tree
              <span class="animate-ping absolute h-1 ml-1 w-1 rounded-full bg-orange-600 opacity-full"></span>
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base animate__animated animate__lightSpeedInLeft">
              People who love to eat are always the best people.
            </p>
            <div class="flex mb-4 mt-10 w-1/2 mr-auto ml-auto">
              <a
                rel="noreferrer"
                class={
                  "animate__animated animate__bounceInUp flex-grow border-b-2 py-2 text-lg px-1 cursor-pointer hover:border-orange-400 text-center hover:text-orange-400"
                }
              >
                Diagram
              </a>
              <a
                rel="noreferrer"
                class={
                  "animate__animated animate__bounceInUp flex-grow border-b-2 py-2 text-lg px-1 cursor-pointer hover:border-orange-400 text-center hover:text-orange-400"
                }
              >
                List
              </a>
            </div>
            <div class="tree">
              <ul>
                  <li><a>Sajjad</a>
                  <ul>
                  <li><a>Roshan</a></li>
                  <li><a>Amit</a></li>

                  </ul>
                  </li>
                  <li><a>Vikash</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
