"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookSlider = ({ books }) => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Trending <span className="text-purple-600">Books</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {books?.map((book) => (
          <SwiperSlide key={book._id} className="h-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border h-full flex flex-col p-3">
              <div className="flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="object-cover h-[250px] w-full transition-transform duration-500 hover:scale-105"
                  priority={true}
                />
              </div>

              {/* Info Section */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg line-clamp-1 text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{book.author}</p>
                <button className="btn btn-sm w-full bg-purple-600 text-white border-none hover:bg-purple-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlider;
