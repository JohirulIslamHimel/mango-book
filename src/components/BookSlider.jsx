"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookSlider = ({ books }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleViewDetails = (id) => {
    if (session?.user) {
      console.log("Redirecting to details:", id);
      router.push(`/book-details/${id}`);
    } else {
      console.log("No session, going to login");
      router.push("/login");
    }
  };

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Trending <span className="text-purple-600">Books</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="pb-12"
      >
        {books?.map((book) => (
          <SwiperSlide key={book.id} className="h-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border h-full flex flex-col p-3 hover:shadow-lg transition-shadow">
              <div
                className="relative h-64 w-full bg-gray-50 rounded-lg overflow-hidden mb-4 cursor-pointer"
                onClick={() => handleViewDetails(book.id)}
              >
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="object-cover height: 250px w-full transition-transform duration-500 hover:scale-105"
                  priority={true}
                />
              </div>

              {/* Info Section */}
              <div className="flex flex-col grow text-center">
                <h3
                  className="font-bold text-lg line-clamp-1 text-gray-800"
                  onClick={() => handleViewDetails(book.id)}
                >
                  {book.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 mb-4 grow">
                  {book.author}
                </p>
                <button
                  className="btn btn-sm w-full bg-purple-600 text-white border-none hover:bg-purple-700 transition-colors py-2 cursor-pointer"
                  onClick={() => handleViewDetails(book.id)}
                >
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
