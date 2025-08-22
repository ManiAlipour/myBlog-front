import { cookies } from "next/headers";
import LoginForm from "./@form/indedx";
import { redirect } from "next/navigation";

const LoginPage = async () => {
//   const c = await cookies();

//   const token = c.get("token");

//   if (token) redirect("/");

  return <LoginForm />;
};

export default LoginPage;
