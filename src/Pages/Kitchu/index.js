import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Team";
import Projects from "../../Components/Projects";
import axios from "axios";

const Index = () => {
  const [kitchen_terns, set_kitchen_terns] = useState({
    yesterday: {
      team: ["loading...", "loading...", "loading...", "loading..."],
      menu: {
        breakfast: "Loading...",
        lunch: "loading...",
        dinner: "loading...",
      },
    },
    today: {
      team: ["loading...", "loading...", "loading...", "loading..."],
      menu: {
        breakfast: "Loading...",
        lunch: "loading...",
        dinner: "loading...",
      },
    },
    tomorrow: {
      team: ["loading...", "loading...", "loading...", "loading..."],
      menu: {
        breakfast: "Loading...",
        lunch: "loading...",
        dinner: "loading...",
      },
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbzqCpvezyfjtanp_5kmvyUS8-EKJbX5-YuqAEe0NT0zbRReiWnNPDHsozcWfhnOaR84/exec"
      )
      .then((data) => {
        set_kitchen_terns({
          yesterday: data.data["yesterday"],
          today: data.data["today"],
          tomorrow: data.data["tomorrow"],
        });
      });
  }, []);
  return (
    <div>
      <Navbar />
      
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white animate__animated animate__lightSpeedInRight">
              KITCHU
              <span class="animate-ping absolute h-1 ml-1 w-1 rounded-full bg-orange-600 opacity-full"></span>
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base animate__animated animate__lightSpeedInLeft">
              People who love to eat are always the best people.
            </p>
          </div>
          
          <div class="flex flex-wrap justify-center -m-4">
            {Object.keys(kitchen_terns).map((item, index) => {
              return (

                <div class="p-4 xl:w-1/4 md:w-1/2 w-full animate__animated animate__lightSpeedInLeft">
                  <div
                    class={
                      "h-full p-6 rounded-lg border-2  flex flex-col relative overflow-hidden " +
                      (item == "today"
                        ? "border-orange-400"
                        : "border-gray-700")
                    }
                  >
                    <span
                      class={
                        " text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl capitalize " +
                        (item == "today" ? "bg-orange-500" : "bg-gray-500")
                      }
                    >
                      {item}
                    </span>
                    <h2 class="text-sm tracking-widest text-gray-300 title-font mb-5 font-medium">
                      Team
                    </h2>
                    {kitchen_terns[item].team.map((item, index) => {
                      return (
                        <p class="flex items-center text-gray-400 mb-2 capitalize">
                          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-orange-400 rounded-full p-3 flex-shrink-0">
                            {index + 1}
                          </span>
                          {item}
                        </p>
                      );
                    })}
                    <div className="border-b-2 border-gray-800 border-opacity-75 mt-2"></div>
                    <h2 class="text-sm tracking-widest mt-3 text-gray-300 title-font mb-5 font-medium">
                      Menu
                    </h2>
                    {Object.keys(kitchen_terns[item].menu).map((i, index) => {
                      return (
                        <>
                          <h2 class="tracking-widest text-xs title-font font-medium capitalize text-orange-400 mb-1">
                            {i}
                          </h2>
                          <h1 class="title-font text-xlg font-medium text-gray-400 mb-3 capitalize">
                            {kitchen_terns[item].menu[i]}
                          </h1>
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
