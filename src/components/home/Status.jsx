import React from "react";

const Status = () => {
  return (
    <section className="bg-purple-600 rounded-3xl p-10 md:p-16 text-white my-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold">10K+</h2>
          <p className="text-purple-100 text-sm mt-2">Active Readers</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">5K+</h2>
          <p className="text-purple-100 text-sm mt-2">Total Books</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">50+</h2>
          <p className="text-purple-100 text-sm mt-2">Categories</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-purple-100 text-sm mt-2">Authors</p>
        </div>
      </div>
    </section>
  );
};

export default Status;
