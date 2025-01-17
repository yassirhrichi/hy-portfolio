import React from "react";
import Section from "./section";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <Section title="Contact Me">
      <div className="mt-3 max-w-[800px] mx-auto bg-retro-gray shadow-[4px_4px_0] shadow-retro-red p-6">
        <ContactForm />
      </div>
    </Section>
  );
}

export default ContactSection;
