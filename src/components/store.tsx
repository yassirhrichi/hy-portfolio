import React from "react";
import Merch from "./merch";
import Section from "./section";

function StoreSection() {
  return (
    <Section title="Store" id="store">
      <div className="mt-3 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 px-10 md:px-2">
        <Merch />
        <Merch />
        <Merch />
        <Merch />
      </div>
    </Section>
  );
}

export default StoreSection;
