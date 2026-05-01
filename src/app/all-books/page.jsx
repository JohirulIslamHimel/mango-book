import BookListWithSearch from "@/components/BookListWithSearch";
import React from "react";

export default async function AllBooksPage() {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/books.json`, {
    cache: "no-store",
  });
  const books = await res.json();

  return (
    <div className="container mx-auto p-6 min-h-screen">
      {/* Search Bar */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Explore All Books</h1>
      </div>

      <BookListWithSearch books={books}></BookListWithSearch>
    </div>
  );
}
