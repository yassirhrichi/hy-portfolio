import React from "react";

function Project() {
  return (
    <div className="group relative bg-retro-gray shadow-[4px_4px_0] shadow-retro-red">
      <div className="flex items-center justify-center max-h-[200px] overflow-hidden">
        <img
          src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
          alt="Project preview"
          className="w-full object-cover grayscale transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-between">
        <div>
          <div className="pb-2 text-xl font-bold text-retro-white">
            budgefy
          </div>
          <div className="text-sm font-thin text-retro-white">
            An AI powered budgeting app that analyses your spending patterns and provides recommendations on how to improve your budgeting habits.
          </div>
        </div>
        <div className="flex items-center justify-start pt-4" >
          <div
            //href="https://google.com"
            className="bg-transparent border-retro-red cursor-default flex flex-row gap-2 border-2 px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-300 ease-in-out hover:bg-retro-red"
           >
            <span>Coming soon...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
