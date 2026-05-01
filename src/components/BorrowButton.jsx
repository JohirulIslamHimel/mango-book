"use client";
import { toast } from "react-hot-toast";

export default function BorrowButton({ stock }) {
  return (
    <button
      onClick={() => toast.success("Book borrowed successfully!")}
      className="btn btn-primary mt-8 px-10 bg-purple-600 border-none"
    >
      Borrow This Book
    </button>
  );
}
