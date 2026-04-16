import { NextRequest } from "next/server";
import { createAdminSession } from "@/lib/session";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  await createAdminSession();
  return Response.json({ success: true });
}
