import React from "react";

export default async function Page({ params }: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id
  return (
    <>
      <div className="pt-12">
        <div className="bg-retro-gray shadow-[4px_4px_0] shadow-retro-red">
          <div className="grid grid-cols-3 gap-4 leading-10  p-6">
            <div className="w-fullrow-span-3">
              <img
                src="/merch/tshirt-bulega-white.png"
                alt="T-shirt preview"
                className="w-full object-cover grayscale transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="w-full col-span-2">
              <div className="text-2xl font-bold ">DA BULGA T-SHIRT</div>
              <div className="text-4xl font-bold ">
                99.99$
              </div>
              <div className="text-sm font-thin ">
                Da t-shirt of the century
              </div>
              <div className="w-full grid grid-cols-4 justify-center ">
                <div className="bg-white max-w-8 max-h-8">&nbsp;</div>
                <div className="bg-white max-w-8 max-h-8">&nbsp;</div>
                <div className="bg-white max-w-8 max-h-8">&nbsp;</div>
                <div className="bg-white max-w-8 max-h-8">&nbsp;</div>
              </div>
              <div>
                <button
                  className="bg-transparent hover:bg-retro-red text-retro-white border-2 border-retro-red px-4  font-bold uppercase transition-all duration-300 ease-in-out"

                >
                  Command now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
