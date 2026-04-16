import { NextRequest } from "next/server";
import { verifyAdminSession } from "@/lib/session";
import { toggleFollowUp } from "@/lib/submissions";

export async function POST(
  _req: NextRequest,
  ctx: RouteContext<"/api/admin/toggle/[id]">
) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) return new Response(null, { status: 401 });

  const { id } = await ctx.params;
  toggleFollowUp(id);
  return Response.json({ success: true });
}
