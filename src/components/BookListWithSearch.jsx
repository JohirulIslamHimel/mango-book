"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BookListWithSearch = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- Sidebar (Category Filter) --- */}
        <aside className="w-full lg:w-80 h-fit bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-slate-800">Categories</h3>
          <div className="flex flex-wrap lg:flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-left px-4 py-3 rounded-lg transition-all font-semibold text-sm cursor-pointer ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* Search Bar -  */}
        <div className="flex-1">
          <div className="mb-10 text-center">
            <input
              type="text"
              placeholder="Search by book title..."
              className="input input-bordered w-full max-w-xl shadow-sm bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Book Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="card bg-base-100 shadow-xl border border-slate-100 hover:scale-105 transition-transform cursor-pointer"
              >
                <figure className="px-4 pt-4">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={300}
                    height={200}
                    className="rounded-xl object-cover h-48 w-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <span className="badge badge-secondary badge-outline text-xs mb-1">
                    {book.category}
                  </span>
                  <h2 className="card-title text-lg font-bold line-clamp-1">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-500 italic">
                    By {book.author}
                  </p>

                  <div className="flex justify-between w-full mt-2 text-xs font-medium">
                    <span
                      className={
                        book.available_quantity > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      Stock: {book.available_quantity}
                    </span>
                  </div>

                  <div className="card-actions mt-4 w-full">
                    <Link
                      href={`/book-details/${book.id}`}
                      className="btn btn-primary btn-sm w-full bg-purple-600 hover:bg-purple-700 border-none"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Found */}
          {filteredBooks.length === 0 && (
            <div className="text-center mt-20 text-gray-400">
              {`No books found with "${searchQuery}"`}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookListWithSearch;
