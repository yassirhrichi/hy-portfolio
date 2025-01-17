import { skillSchema } from "@/lib/schemas/skill";
import React from "react";

function Skill({ name, url }: skillSchema) {
  return (
    <div className="flex group relative items-center justify-center bg-retro-gray shadow-[4px_4px_0] shadow-retro-red w-24 h-24 overflow-hidden">
      <img
        src={url}
        alt={name}
        className="w-full h-full object-cover grayscale"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 text-sm text-retro-white flex items-center justify-center">
        {name}
      </div>
    </div>
  );
}

export default Skill;
