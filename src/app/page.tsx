import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto pt-16">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center">Welcome to my page</h1>
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
      </section>
      <section id="about-me" className="py-16">
        <h1 className="text-4xl font-bold text-center">About me</h1>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="text-center md:text-justify flex flex-col justify-end px-10 md:px-0">
            <p className="mt-2">
              As a software engineer, my mission is to create reliable web
              solutions that help your business overcome the obstacles standing
              in the way of its next chapter of success.
            </p>
            <p className="mt-2">
              As any other developer, I only have one shot, one opportunity to
              leave a lasting impression and build a strong relationship with
              clients, and I intend to seize it, since success is the only
              option—failure’s not.
            </p>
            <p className="mt-2">
              When I’m not losing myself to coding, you’ll find me gaming,
              reading, or enjoying a plate of mom’s spaghetti.
            </p>
          </div>
          <div className="md:mt-0">
            <h2 className="text-center text-2xl font-bold">Tools</h2>
            <div className="grid grid-cols-3 gap-6 px-3 place-items-center">
              <div className="flex group relative items-center justify-center bg-retro-gray shadow-[4px_4px_0] shadow-retro-red w-24 h-24 overflow-hidden">
                <img
                  src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                  alt="Project preview"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 text-sm text-retro-white flex items-center justify-center">
                  nextjs
                </div>
              </div>
              <div className="flex group relative items-center justify-center bg-retro-gray shadow-[4px_4px_0] shadow-retro-red w-24 h-24 overflow-hidden">
                <img
                  src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                  alt="Project preview"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 text-sm text-retro-white flex items-center justify-center">
                  nextjs
                </div>
              </div>
              <div className="flex group relative items-center justify-center bg-retro-gray shadow-[4px_4px_0] shadow-retro-red w-24 h-24 overflow-hidden">
                <img
                  src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                  alt="Project preview"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 text-sm text-retro-white flex items-center justify-center">
                  nextjs
                </div>
              </div>
              <div className="flex group relative items-center justify-center bg-retro-gray shadow-[4px_4px_0] shadow-retro-red w-24 h-24 overflow-hidden">
                <img
                  src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                  alt="Project preview"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 text-sm text-retro-white flex items-center justify-center">
                  nextjs
                </div>
              </div>
              <div className="flex group relative items-center justify-center bg-retro-gray shadow-[4px_4px_0] shadow-retro-red w-24 h-24 overflow-hidden">
                <img
                  src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                  alt="Project preview"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-retro-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50 text-sm text-retro-white flex items-center justify-center">
                  nextjs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-16">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <div className="mt-3 grid grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10 md:px-2">
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
                  Project Name 1
                </div>
                <div className="text-sm font-thin text-retro-white">
                  A brief description of the project and the technologies used.
                </div>
              </div>
              <div className="flex items-center justify-start pt-4">
                <a
                  href="https://google.com"
                  className="bg-transparent border-retro-red flex flex-row gap-2 border-2 px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-300 ease-in-out hover:bg-retro-red"
                >
                  <span>Github repo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <div className="mt-3 max-w-[800px] mx-auto bg-retro-gray shadow-[4px_4px_0] shadow-retro-red p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block">
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-2 border-2 border-retro-red text-retro-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 border-2 border-retro-red text-retro-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block">
                Message :
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full min-h-36 p-2 border-2 border-retro-red text-retro-black"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-transparent hover:bg-retro-red text-retro-white border-2 border-retro-red px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
