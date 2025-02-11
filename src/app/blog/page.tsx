import React from "react";
import { readMdxFile } from "./utils";

export const metadata = {
    title: 'Blog',
    description: 'Welcome to my blog. For the nerds, it\'s made with mdx. ',
  }

export default function page() {
  console.log(readMdxFile("today-i-learnt-22-01-2025.mdx"))
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
    </section>
  );
}
