import Link from "next/link";

export const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Individual", path: "/individual" },
    { name: "Group", path: "/group" },
  ];
  const title: string = "Invoice Creator";
  return (
    <div className="flex justify-between items-center">
      <Link
        className="no-underline hover:underline cursor-pointer text-2xl px-2"
        href="/"
      >
        {title}
      </Link>
      <div>
        {routes.map((route) => {
          return (
            <Link
              className="no-underline hover:underline cursor-pointer px-2"
              href={route.path}
              key={route.name}
            >
              {route.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
