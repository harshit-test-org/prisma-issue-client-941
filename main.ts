import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const data = await prisma.users.findMany();
  console.log(data);
  prisma.$disconnect();
}

main();
