import React from "react";
import Section from "./section";
import Project from "./project";

function ProjectsSection() {
  return (
    <Section title="Projects">
      <div className="mt-3 grid grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10 md:px-2">
        <Project />
      </div>
    </Section>
  );
}

export default ProjectsSection;
