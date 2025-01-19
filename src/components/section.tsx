import React from "react";

function Section({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title?: string;
  id?: string;
}) {
  return (
    <section className="py-8 pt-16" id={id}>
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      {children}
    </section>
  );
}

export default Section;
