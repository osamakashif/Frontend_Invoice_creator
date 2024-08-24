"use client";
import { useRouter } from "next/navigation";
import "./Navbar.css";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navbar">
      <a type="button" onClick={() => router.push("/")}>
        Home
      </a>
      <a type="button" onClick={() => router.push("/individual")}>
        Individual
      </a>
      <a type="button" onClick={() => router.push("/group")}>
        Group
      </a>
    </div>
  );
};
