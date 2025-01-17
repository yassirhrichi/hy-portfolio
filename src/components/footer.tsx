import React from "react";

function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-retro-red text-retro-white">
      <p className="text-sm">&copy; {new Date().getFullYear()} Hrichi Yassir</p>
    </footer>
  );
}

export default Footer;
