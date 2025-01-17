import React from "react";
import Section from "./section";

function ContactSection() {

  return (
    <Section title="Contact Me">
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
    </Section>
  );
}

export default ContactSection;
