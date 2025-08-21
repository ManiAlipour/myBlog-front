import { redirect } from "next/navigation";
import VerifyEmailForm from "./VerifyEmailForm";
import { cookies } from "next/headers";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const email = (await searchParams).email || "";
  if (!email) redirect("/register");

  const c = await cookies();
  const token = c.get("token");

  if(token?.value) redirect("/")

  return <VerifyEmailForm email={email} />;
}
