"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const handleMount = () => setMounted(true);
    handleMount();
  }, []);
  if (!mounted) return null;

  const navLinks = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/all-books">All Books</NavLink>
      </li>
      <li>
        <NavLink href="/my-profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 py-2 md:py-4">
      <div className="container mx-auto px-4 navbar">
        {/* Navbar Start: Mobile Menu + Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-purple-600 italic"
          >
            MangoBook
          </Link>
        </div>

        {/* Navbar Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-medium">{navLinks}</ul>
        </div>

        {/* Navbar End: Auth Section */}
        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-spinner text-purple-600 loading-sm"></span>
          ) : user ? (
            <div className="flex items-center gap-2 md:gap-3">
              <span className="hidden sm:inline-block font-semibold text-gray-700">
                {user.name.split(" ")[0]}{" "}
              </span>
              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-xs md:btn-sm bg-purple-600 text-white border-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-xs md:btn-sm bg-purple-600 text-white border-none px-4 md:px-6"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
