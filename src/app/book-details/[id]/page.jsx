import BorrowButton from "@/components/BorrowButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

export default async function BookDetails({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;

  const res = await fetch(`${process.env.BETTER_AUTH_URL}/books.json`, {
    cache: "no-store",
  });
  const data = await res.json();
  const book = data.find((b) => b.id === parseInt(id));

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-10 min-h-[90vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-5xl w-full">
        {/* Book Image */}
        <div className="md:w-2/5 flex justify-center">
          <Image
            src={book.image_url}
            alt={book.title}
            width={500}
            height={700}
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Book Info */}
        <div className="md:w-3/5 flex flex-col justify-center">
          <span className="badge badge-secondary mb-4">{book.category}</span>
          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4 italic">By {book.author}</p>
          <hr className="my-6" />
          <p className="text-gray-700 leading-relaxed mb-6">
            {book.description}
          </p>

          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Available Quantity:</p>
            <p className="text-2xl font-bold text-purple-600">
              {book.available_quantity}
              <span className="text-sm font-medium text-gray-500">
                Copies left
              </span>
            </p>
          </div>

          <BorrowButton stock={book.available_quantity}></BorrowButton>
        </div>
      </div>
    </div>
  );
}
