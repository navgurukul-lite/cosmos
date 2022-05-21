import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Team";
import Projects from "../../Components/Projects";
import campuses from "../../Data/campuses.json";

const index = () => {
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded animate__animated animate__backInUp animate__slower"
            alt="hero"
            src="https://github.com/thompsonemerson/thompsonemerson/raw/master/cover-thompson.png"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-2xl text-3xl mb-4 font-medium text-white animate__animated animate__backInUp animate__slower">
              Navgurukul Lite Managed by Navgurukul Students
            </h1>
            <p class="leading-relaxed mb-8 animate__animated animate__backInUp animate__slower">
              We welcome you all let's code the future and makes our dreams come true
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-16 mx-auto">
          <h1 class="text-3xl font-medium title-font text-white mb-12 text-center animate__animated animate__rollIn animate__slow">
            Our Campuses
          </h1>

          <div class="flex flex-wrap -m-4">
            {campuses.map((item) => {
              return (
                <div class="p-4 md:w-1/3 animate__animated animate__backInUp animate__slow">
                  <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h1 class="title-font text-lg font-medium text-white mb-3">
                        {item.name}
                      </h1>
                      <div class="flex items-center flex-wrap ">
                        <a
                          href={item.map}
                          class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          View On Map
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="text-red-400 w-4 h-4 mr-2 inline-block"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          {item.students}
                        </span>
                      </div>
                    </div>
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

export default index;
