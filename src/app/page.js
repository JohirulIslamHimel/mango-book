import React from "react";

import Banner from "@/components/home/Banner";
import LatestNews from "@/components/home/LatestNews";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Features from "@/components/home/Features";
import Status from "@/components/home/Status";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg",
      price: "$10",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiGnEmUfdPwlsecXDA6mZK5tPqgHdJik67A&s",
      price: "$12",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_hybrid&w=740&q=80",
      price: "$15",
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnVp3abpKHU6VI-9TV3Rova8rKtVHp-b0Sg&s",
      price: "$11",
    },
  ];

  return (
    <div className="container mx-auto px-4 space-y-10">
      <Banner></Banner>
      <LatestNews></LatestNews>
      <FeaturedBooks books={books}></FeaturedBooks>
      <Features></Features>
      <Status></Status>
    </div>
  );
};

export default HomePage;
