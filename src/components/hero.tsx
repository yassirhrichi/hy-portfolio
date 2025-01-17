import React from "react";
import Section from "./section";

function HeroSection() {
  return (
    <Section title="Welcome to my page">
      <div className="mt-3 grid grid-cols grid-cols-1 md:grid-cols-2 md:gap-6">
        <div className="order-last md:order-first p-4 mt-6 md:mt-0 text-retro-white text-center xs:text-sm md:text-sm xl:text-lg ">
          <pre className="font-mono">{`██╗  ██╗ ██████╗  ██╗  ██████╗ ██╗  ██╗ ██╗
██║  ██║ ██╔══██╗ ██║ ██╔════╝ ██║  ██║ ██║
███████║ ██████╔╝ ██║ ██║      ███████║ ██║
██╔══██║ ██╔══██╗ ██║ ██║      ██╔══██║ ██║
██║  ██║ ██║  ██║ ██║ ╚██████╗ ██║  ██║ ██║
╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═╝`}</pre>
          <pre className="font-mono">{`
██╗   ██╗ █████╗ ███████╗███████╗██╗██████╗ 
╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝██║██╔══██╗
 ╚████╔╝ ███████║███████╗███████╗██║██████╔╝
  ╚██╔╝  ██╔══██║╚════██║╚════██║██║██╔══██╗
   ██║   ██║  ██║███████║███████║██║██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═╝`}</pre>
        </div>
        <div className="flex flex-col text-center md:text-justify justify-around px-10 md:px-0">
          <div>
            <p>
              Hi, I'm Yassir Hrichi, a software engineer with a goal: WORLD
              DOMIN… cough, I mean :{" "}
              <b>
                Transform the challenges your business faces into growth
                opportunities through efficient and reliable web solutions.
              </b>
              <br /> Yeah..., let's go with that{" "}
              <span className="font-serif">( ͡° ͜ʖ ͡°)</span>
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <a
              href="#contact"
              className="bg-transparent hover:bg-retro-red text-retro-white border-2 border-retro-red px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
