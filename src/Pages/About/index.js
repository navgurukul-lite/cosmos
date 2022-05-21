import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Team";
import Projects from "../../Components/Projects";
import active_projects from "../../Data/active_projects.json";

const index = () => {
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex py-12 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded animate__animated animate__backInUp animate__slower"
            alt="hero"
            src="https://github.com/thompsonemerson/thompsonemerson/raw/master/cover-thompson.png"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font  mb-4 ml-2 font-medium text-white animate__animated animate__backInUp animate__slower">
              <span className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-600">
                Navgurukul{" "}
                <span className="text-base hover:animate-spin mr-1">Lite</span>
              </span>
              Managed by Navgurukul Students
            </h1>
            <p class="leading-relaxed animate__animated animate__backInUp animate__slower">
              We welcome you all let's code the future and makes our dreams come
              true
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 mx-auto">
          <h1 class="text-3xl font-medium title-font text-white mb-5 text-center animate__animated animate__rollIn animate__slow">
            Active Projects
            <div class="flex py-3 justify-center">
              <div
                style={{ height: "0.4px" }}
                class="w-32 rounded-full bg-red-500 inline-flex"
              ></div>
            </div>
          </h1>

          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-5 mx-auto">
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                {active_projects.map((item) => {
                  return (
                    <div class="p-4 w-full md:w-1/3 flex flex-col text-center items-center animate__animated animate__backInUp animate__slower">
                      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-red-400 mb-5 flex-shrink-0">
                        <img src={item.image} />
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-white text-lg title-font font-medium mb-3">
                          {item.name}
                        </h2>
                        <p class="leading-relaxed text-base">
                          {item.description}
                        </p>
                        <a
                          href={item.demo}
                          class="mt-3 text-red-400 inline-flex items-center mr-4"
                        >
                          Demo
                          
                        </a>
                        <a
                          href={item.github}
                          class="mt-3 text-red-400 inline-flex items-center"
                        >
                          Gitub
                          
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
