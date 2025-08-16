import axios from "axios";

export function serverApi(cookieHeader?: string) {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader || "",
    },
    withCredentials: true,
  });
}
