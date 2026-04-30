import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <section className="bg-white border-y border-purple-100 py-4">
      <Marquee
        gradient={false}
        speed={50}
        className="text-lg font-semibold text-purple-700"
      >
        <span className="mx-10">
          🚀 New Arrivals: The Art of Coding | Special Discount on Memberships!
        </span>
        <span className="mx-10">
          📖 New Arrivals: React Mastery | Special Discount on Memberships!
        </span>
      </Marquee>
    </section>
  );
};

export default LatestNews;
