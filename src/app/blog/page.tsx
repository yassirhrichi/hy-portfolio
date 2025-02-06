import React from "react";

export const metadata = {
    title: 'Blog',
    description: 'Welcome to my blog. For the nerds, it\'s made with mdx. ',
  }

export default function page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
    </section>
  );
}
