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

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Website Logo (Links to Home) */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-purple-600 italic">
            MangoBook
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-books">All Books</NavLink>
          </li>
          <li>
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Right: Conditional Rendering */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-spinner text-purple-600"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-700">{user.name}</span>
              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-sm bg-purple-600 text-white border-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-sm bg-purple-600 text-white border-none px-6"
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
