import { FaShippingFast, FaBookReader, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaBookReader className="text-4xl text-purple-600" />,
      title: "Huge Collection",
      desc: "Easily find thousands of books of your choice",
    },
    {
      id: 2,
      icon: <FaShippingFast className="text-4xl text-purple-600" />,
      title: "Fast Delivery",
      desc: "The book will be delivered to you within 48 hours of ordering.",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-4xl text-purple-600" />,
      title: "24/7 Support",
      desc: "We are always by your side in any problem.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f) => (
          <div
            key={f.id}
            className="text-center p-8 border border-purple-50 rounded-3xl hover:shadow-lg transition-all"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
