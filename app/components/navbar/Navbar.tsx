"use client";
import { useRouter } from "next/navigation";
import "./Navbar.css";

export const Navbar = () => {
  const router = useRouter();
  const routes = [
    { name: "Home", path: "/" },
    { name: "Individual", path: "/individual" },
    { name: "Group", path: "/group" },
  ];
  const title: string = "Invoice Creator";
  return (
    <div className="flex justify-between items-center">
      <h1>
        <a className="nav-link text-2xl px-2" onClick={() => router.push("/")}>
          {title}
        </a>
      </h1>
      <div>
        {routes.map((route) => {
          return (
            <a
              className="nav-link px-2"
              onClick={() => router.push(route.path)}
              key={route.name}
            >
              {route.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
