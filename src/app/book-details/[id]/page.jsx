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
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-3xl shadow-sm border">
        {/* Book Image */}
        <div className="md:w-1/3">
          <Image
            src={book.image_url}
            alt={book.title}
            width={400}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="md:w-2/3">
          <span className="badge badge-secondary mb-4">{book.category}</span>
          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4 italic">By {book.author}</p>
          <hr className="my-6" />
          <p className="text-gray-700 leading-relaxed mb-6">
            {book.description}
          </p>

          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">Available Quantity:</p>
            <span className="text-2xl font-bold text-purple-600">
              {book.available_quantity}
            </span>
          </div>

          <BorrowButton stock={book.available_quantity}></BorrowButton>
        </div>
      </div>
    </div>
  );
}
