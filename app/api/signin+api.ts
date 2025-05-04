import { db } from "~/lib/prisma";
import { SigninSchema } from "~/schemas/auth.schema";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validBody = SigninSchema.safeParse(body);

    if (validBody.error) {
      return Response.json({ err: "Invalid params" });
    }

    const user = await db.user.findUnique({
      where: {
        email: validBody.data.email,
      },
    });

    if (!user) {
      return Response.json({ err: "User not found" });
    }

    const passwordMatch = bcrypt.compareSync(
      validBody.data.password,
      user?.password!
    );

    if (!passwordMatch) {
      return Response.json({ err: "Invalid email or password" });
    }

    return Response.json({ msg: "Signed in successfully" });
  } catch (error) {
    console.error("Signin Error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
