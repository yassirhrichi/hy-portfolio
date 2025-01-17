import React from "react";

function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      {children}
    </section>
  );
}

export default Section;
