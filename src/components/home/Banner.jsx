import Link from "next/link";
const Banner = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Banner Section */}
      <section className="bg-purple-50 rounded-3xl py-16 md:py-24 mt-10  my-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl">
          Find Your Next
          <br />
          <span className="text-purple-600">Read</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg max-w-2xl font-medium">
          Explore our vast collection of digital books. From classics to modern
          technical guides, we have it all.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/all-books">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none px-10 rounded-full text-lg h-14 shadow-lg transition-all hover:scale-105">
              Browse Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
