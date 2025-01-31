"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const routing = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/project",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <nav className="flex gap-8">
      {routing.map((route, index) => {
        return (
          <Link 
            href={route.path}
            key={index}
            className={`${route.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
