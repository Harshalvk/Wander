import { db } from "~/lib/prisma";

export async function GET(req: Request) {
  const users = await db.user.findMany();
  return Response.json(users);
}
