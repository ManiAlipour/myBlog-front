import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables");
}

/**
 * @param payload
 * @param expiresIn
 * @returns token string
 */
export function signToken(payload: object, expiresIn: string | number = "30d") {
  return jwt.sign(
    payload,
    JWT_SECRET as jwt.Secret,
    { expiresIn } as SignOptions
  );
}

/**
 * @param token
 * @returns
 */
export function verifyToken<T>(token: string): T {
  return jwt.verify(token, JWT_SECRET) as T;
}
