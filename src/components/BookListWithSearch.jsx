"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BookListWithSearch = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      {/* Search Bar -  */}
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
            className="card bg-base-100 shadow-xl border border-slate-100 hover:scale-105 transition-transform"
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
              <p className="text-sm text-gray-500 italic">By {book.author}</p>

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
          No books found with "{searchQuery}"
        </div>
      )}
    </>
  );
};

export default BookListWithSearch;
