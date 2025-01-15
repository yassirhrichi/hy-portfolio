import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col justify-around">
            <div>
              <h1 className="text-4xl font-bold">Welcome to my page</h1>
              <div className="mt-3">
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
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="#contact"
                className="bg-retro-black hover:bg-retro-red text-retro-white border-2 border-retro-red px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="p-4 text-retro-white text-center">
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
        </div>
      </section>
      <section id="about-me">
        <div className="mt-5">
          <h1 className="text-4xl font-bold text-center">About me</h1>
          <div className="mt-4">
            <p>
              As a software engineer, my mission is to create reliable web
              solutions that help your business overcome the obstacles standing
              in the way of its next chapter of success.
            </p>
            <p className="mt-2">
              Look, I have one shot, one opportunity to leave a lasting
              impression and build a strong relationship with my clients, and I
              intend to seize it. Success is the only option—failure’s not.
            </p>
            <p className="mt-2">
              When I’m not losing myself to coding, you’ll find me gaming,
              reading, or enjoying a plate of mom’s spaghetti.
            </p>
          </div>
        </div>
      </section>
      <section id="projects">About me section</section>
      <section id="blog">About me section</section>
      <section id="contact">About me section</section>
    </div>
  );
}

// <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
// <p className="text-sm">
//   &copy; {new Date().getFullYear()} Hrichi Yassir
// </p>
// </footer>
