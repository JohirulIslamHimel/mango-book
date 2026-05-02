import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="container mx-auto p-6 min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-2xl bg-white shadow-2xl border border-slate-100 rounded-3xl overflow-hidden">
        {/* Profile Header/Cover */}
        <div className="h-32 bg-linear-to-r from-purple-600 to-blue-500"></div>

        <div className="px-8 pb-10">
          {/* User Avatar */}
          <div className="relative -mt-16 mb-6 flex justify-center md:justify-start">
            <div className="ring-purple-600 ring-offset-base-100 w-32 h-32 rounded-full ring ring-offset-4 overflow-hidden bg-white">
              <Image
                src={
                  user.image || "https://i.ibb.co/vBR7S8L/user-placeholder.png"
                }
                alt={user.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* User Info Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-800">{user.name}</h1>
            <p className="text-purple-600 font-medium mb-6">
              {user.role || "Standard User"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Email Address
                </label>
                <p className="text-slate-700 font-semibold">{user.email}</p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  User ID
                </label>
                <p className="text-slate-700 font-mono text-sm truncate">
                  {user.id}
                </p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Email Verified
                </label>
                <p className="text-slate-700 font-semibold">
                  {user.emailVerified ? "✅ Verified" : "❌ Not Verified"}
                </p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Account Created
                </label>
                <p className="text-slate-700 font-semibold">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/update-profile">
                <button className="btn btn-primary bg-purple-600 hover:bg-purple-700 border-none px-8">
                  Edit Profile
                </button>
              </Link>
              <button className="btn btn-outline border-slate-200 hover:bg-slate-100 hover:text-slate-800 px-8">
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
