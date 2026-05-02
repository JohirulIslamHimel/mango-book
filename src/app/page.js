import React from "react";

import Banner from "@/components/home/Banner";
import LatestNews from "@/components/home/LatestNews";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Features from "@/components/home/Features";
import Status from "@/components/home/Status";

const HomePage = async () => {
  const res = await fetch("http://localhost:3000/books.json", {
    cache: "no-store",
  });
  const books = await res.json();
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
