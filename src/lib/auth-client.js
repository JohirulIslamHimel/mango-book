import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "https://mangoo-book.vercel.app",
});

export const { useSession, signIn, signUp, signOut } = authClient;
