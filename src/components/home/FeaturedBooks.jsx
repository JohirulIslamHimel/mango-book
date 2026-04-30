import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedBooks = ({ books }) => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-end mb-10">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800">Featured Books</h2>
          <div className="w-20 h-1.5 bg-purple-600 rounded-full mt-2"></div>
        </div>
        <Link
          href="/all-books"
          className="text-purple-600 font-bold hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.id}>
            <div className="relative bg-gray-100 rounded-xl h-60 mb-4 overflow-hidden">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              ></Image>
            </div>
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {book.title}
            </h3>
            <p className="text-gray-500 text-sm mb-3">By {book.author}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-purple-600 font-bold text-lg">
                {book.price}
              </span>
              <Link href={`/books/${book.id}`}>
                <button className="btn btn-sm bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white border-purple-200">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
