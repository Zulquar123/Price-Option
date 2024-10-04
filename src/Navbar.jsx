import React, { useState } from "react";
import Link from "./Link";
import { ImMenu } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav>
      <div
        onClick={() => setopen(!open)}
        className="md:hidden text-5xl font-bold"
      >
        {open ? <RxCross1 /> : <ImMenu />}
      </div>
      <ul className="md:flex justify-center mt-5">
        {routes.map((route) => (
          <Link route={route} />
        ))}
      </ul>
    </nav>
  );
}
