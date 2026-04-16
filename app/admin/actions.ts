"use server";

import { revalidatePath } from "next/cache";
import { verifyAdminSession } from "@/lib/session";
import { toggleFollowUp } from "@/lib/submissions";

export async function toggleFollowUpAction(id: string) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) throw new Error("Unauthorized");
  toggleFollowUp(id);
  revalidatePath("/admin");
}
