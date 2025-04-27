import { db } from "~/lib/prisma";
import bcrypt from "bcryptjs";
import { SignupSchema } from "~/schemas/auth.schema";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const validBody = SignupSchema.safeParse(data);
  console.log(validBody);
  if (validBody.error) {
    return Response.json({ err: "Invalid body" });
  }

  const user = await db.user.findUnique({
    where: {
      email: validBody.data.email,
    },
  });

  if (user) {
    return Response.json({ msg: "User with email already exists" });
  }

  const hashedPassword = bcrypt.hashSync(validBody.data.password, 10);

  const newUser = await db.user.create({
    data: {
      email: validBody.data.email,
      password: hashedPassword,
      username: validBody.data.username,
    },
  });

  return Response.json({
    newUser,
  });
}
