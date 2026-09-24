import Link from "next/link";
import React from "react";

const Header = () => {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ];

  return (
    <header className="w-full h-16 border-b flex items-center justify-center gap-4">
      <nav className="flex gap-5">
        {routes.map((route) => (
          <Link key={route.url} href={route.url}>
            {" "}
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
