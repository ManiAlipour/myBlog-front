import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/db/connect";
import User from "@/lib/db/models/User";
import VerifyEmailForm from "./VerifyEmailForm";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { email?: string };
}) {
  const email = searchParams.email || "";
  if (!email) redirect("/register");

  await dbConnect();
  const user = await User.findOne({ email });
  if (!user) redirect("/");

  return <VerifyEmailForm email={email} />;
}
