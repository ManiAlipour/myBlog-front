import axios, { AxiosInstance } from "axios";

/**
 * Creates an Axios instance for server-side API calls
 *
 * @param cookieHeader - Cookie string for SSR requests (optional)
 * @param token - Bearer token for Authorization header (optional)
 */
export function serverApi(
  cookieHeader?: string,
  token?: string
): AxiosInstance {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (cookieHeader) {
    headers.Cookie = cookieHeader;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 10000, // 10s timeout
    headers,
    withCredentials: true, // allow sending cookies
  });
}
