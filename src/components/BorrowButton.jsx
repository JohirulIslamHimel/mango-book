"use client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function BorrowButton({ stock }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const handleBorrow = () => {
    if (!session) {
      toast.error("Please login to borrow this book!");

      router.push("/login");
      return;
    }

    if (stock <= 0) {
      return toast.error("Sorry, no copies left to borrow!");
    }

    toast.success("Book borrowed successfully!");
  };
  return (
    <button
      onClick={handleBorrow}
      disabled={stock <= 0}
      className={`btn mt-8 px-10 border-none text-white ${
        stock > 0
          ? "bg-purple-600 hover:bg-purple-700"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      {stock > 0 ? "Borrow This Book" : "Out of Stock"}
    </button>
  );
}
