import React from "react";
import Section from "./section";
import { SkillSchema } from "@/lib/schemas/SkillSchema";
import Skill from "./skill";

function AboutMeSection() {
  const skills: SkillSchema[] = [
    {
      name: "React",
      url: "/skills/react.png",
    },
    {
      name: "Nextjs",
      url: "/skills/nextjs.webp",
    },
    {
      name: "Spring boot",
      url: "/skills/spring-boot.png",
    },
    {
      name: "PostgreSQL",
      url: "/skills/posgresql.webp",
    },
    {
      name: "Typescript",
      url: "/skills/typescript.png",
    },
    {
      name: "HTML",
      url: "/skills/html.png",
    },
    {
      name: "CSS",
      url: "/skills/css.png",
    },
    {
      name: "git",
      url: "/skills/git.png",
    },
  ];
  return (
    <Section title="About me">
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div className="text-center md:text-justify flex flex-col justify-around px-10 md:px-0">
          <p className="mt-2">
            As a software engineer, my mission is to create reliable web
            solutions that help your business overcome the obstacles standing in
            the way of its next chapter of success.
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
        <div className=" mt-4 md:mt-8 flex justify-start items-center flex-col">
          <h2 className="text-center text-xl font-bold mb-3">Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 place-items-center">
            {skills.map((skill) => (
              <Skill key={skill.name} name={skill.name} url={skill.url} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMeSection;
