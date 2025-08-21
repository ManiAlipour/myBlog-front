interface User {
  email: string;
  name: string;
  bio: string;
  avatar: string;
  role: "admin" | "user";
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}
