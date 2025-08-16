import mongoose from "mongoose";

let isConnected = false; // برای جلوگیری از کانکشن‌های تکراری

export async function dbConnect() {
  if (isConnected) {
    return;
  }

  const DATABASE_URL = process.env.DATABASE_URL as string;
  try {
    const conn = await mongoose.connect(DATABASE_URL);

    isConnected = true;
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}
