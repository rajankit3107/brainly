"use server";

import { auth } from "@/lib/auth";
import SignupPage from "./signup";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Signup() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/");
  }
  return <SignupPage />;
}
