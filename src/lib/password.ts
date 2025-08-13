import bcrypt from "bcrypt";

const SALT_ROUNDS = 10; // هرچی عدد بزرگتر امنیت بالاتر ولی سرعت کمتر

/**
 * @param password - password
 * @returns hashPassword
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
}

/**
 * @param password
 * @param hashedPassword
 * @returns Boolean
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
