"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 text-sm font-semibold transition-colors"
    >
      Sign Out
    </button>
  );
}
