"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    if (data) {
      toast.success("Information updated!");
      router.push("/my-profile");
      router.refresh();
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-[80vh]">
      <div className="max-w-md w-full p-8 bg-white shadow-2xl rounded-3xl border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Update Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="form-control">
            <label className="label text-sm font-semibold text-slate-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full focus:border-purple-600 outline-none"
              required
            />
          </div>

          <div className="form-control">
            <label className="label text-sm font-semibold text-slate-600">
              Profile Image URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input input-bordered w-full focus:border-purple-600 outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-none text-white font-bold h-12"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}
