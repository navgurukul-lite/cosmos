import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import projects from "../../Data/projects.json";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Index = () => {
  const list_topics = Array.from(new Set(projects.map((item) => item.topic)));
  const [active, setActive] = useState(list_topics[0]);

  const changeActive = (topic) => {
    setActive(topic);
  };
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-16 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="flex flex-col text-center w-full">
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base animate__animated animate__lightSpeedInLeft animate__slower">
                May 2022
              </p>
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white animate__animated animate__lightSpeedInRight animate__slow">
                Coding Hackthon
                <span class="animate-ping absolute h-1 ml-1 w-1 rounded-full bg-orange-600 opacity-full"></span>
              </h1>
              <span class="animate__animated animate__rubberBand inline-block py-1 px-2  text-orange-500 text-sm font-semibold tracking-widest w-full lg:w-1/2 ml-auto mr-auto animate__slower">
              “ First, solve the problem. Then, write the code. ” - John Johnson
              </span>
            </div>
            <div class="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div class="flex mb-4 mt-10">
                {list_topics.map((item) => {
                  return (
                    <a
                      rel="noreferrer"
                      onClick={() => changeActive(item)}
                      class={
                        "animate__animated animate__slower animate__bounceInUp flex-grow border-b-2 py-2 text-lg px-1 cursor-pointer hover:border-orange-400 text-center hover:text-orange-400" +
                        (item === active
                          ? " text-orange-500 border-orange-500"
                          : " border-gray-800")
                      }
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
              <div class="flex flex-wrap w-full overflow-hidden animate__animated animate__bounceInUp animate__slow">
                <div class="md:pr-10 md:py-6">
                  {projects
                    .filter((item) => item.topic === active)
                    .map((item, index) => {
                      return (
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-700 inline-flex items-center justify-center text-white font-bold relative z-10">
                            {index + 1}
                          </div>
                          <div class="flex-grow pl-4">
                            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                              {item.name}
                            </h2>
                            <p class="leading-relaxed">
                              <ReactMarkdown
                                components={{
                                  a: ({ node, ...props }) => (
                                    <a target="_blank" className="text-sky-500" {...props} />
                                  ),
                                }}
                                rehypePlugins={[rehypeRaw]}
                              >
                                {item.Content.split("\n").join("<br/>")}
                              </ReactMarkdown>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  <div class="flex relative">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-700 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">
                        FINISH
                      </h2>
                      <p class="leading-relaxed">
                        Talk is cheap. Show me the code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
