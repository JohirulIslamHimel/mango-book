"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-purple-600 border-b-2 border-purple-600 font-bold" : "text-gray-600"} transition-all duration-200`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
