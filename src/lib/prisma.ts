import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}
export default global.prisma || (global.prisma = new PrismaClient());