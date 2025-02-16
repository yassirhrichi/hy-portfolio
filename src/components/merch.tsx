import Link from 'next/link'
import React from 'react'

function Merch() {
  return (
    <div className="group relative bg-retro-gray shadow-[4px_4px_0] shadow-retro-red">
    <div className="flex items-center justify-center max-h-[200px] overflow-hidden">
      <img
        src="/merch/tshirt-bulega-white.png"
        alt="T-shirt preview"
        className="w-full object-cover grayscale transition-all duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-4 flex flex-col flex-between">
      <div>
        <div className="pb-2 text-xl font-bold text-retro-white">
          Da Beluga T-shirt
        </div>
        <div className="text-sm font-thin text-retro-white">
          An AI powered budgeting app tha... Oups, wrong card, teehee.
        </div>
      </div>
      <div className="flex items-center justify-start pt-4">
        <Link
          href="/store/1"
          className="w-[150px] group-button bg-transparent border-retro-red flex flex-row justify-center gap-2 border-2 px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-300 ease-in-out hover:bg-retro-red"
         >
          <span className='block  [.group-button:hover_&]:hidden transition-all duration-300 ease-in-out'>Check merch</span>
          <span className='hidden [.group-button:hover_&]:block transition-all duration-300 ease-in-out'>U sure, bro?!</span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Merch