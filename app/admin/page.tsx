import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/session";
import { getSubmissions } from "@/lib/submissions";
import { toggleFollowUpAction } from "./actions";
import LogoutButton from "./LogoutButton";

export default async function AdminPage() {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) redirect("/admin/login");

  const submissions = await getSubmissions();

  const newCount = submissions.filter((s) => !s.followedUp).length;

  return (
    <main className="min-h-screen bg-[#0b0f1a] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-1">
              Iron Web Studios
            </p>
            <h1 className="text-3xl font-extrabold">Lead Dashboard</h1>
            {newCount > 0 && (
              <p className="text-orange-400 text-sm mt-1">
                {newCount} lead{newCount !== 1 ? "s" : ""} need follow-up
              </p>
            )}
          </div>
          <LogoutButton />
        </div>

        {submissions.length === 0 ? (
          <div className="rounded-2xl bg-white/3 border border-white/10 p-16 text-center text-gray-500">
            No submissions yet. Share your site and leads will show up here.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {submissions.map((s) => (
              <div
                key={s.id}
                className={`rounded-2xl border p-6 transition-colors ${
                  s.followedUp
                    ? "bg-white/2 border-white/5 opacity-60"
                    : "bg-white/4 border-orange-500/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-bold">{s.name}</h2>
                      {!s.followedUp && (
                        <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                          Needs Follow-Up
                        </span>
                      )}
                      {s.followedUp && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                          Done
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{s.business}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {new Date(s.submittedAt).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>

                  <form
                    action={async () => {
                      "use server";
                      await toggleFollowUpAction(s.id);
                    }}
                  >
                    <button
                      type="submit"
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                        s.followedUp
                          ? "bg-white/5 hover:bg-white/10 text-gray-400"
                          : "bg-orange-500 hover:bg-orange-400 text-white"
                      }`}
                    >
                      {s.followedUp ? "Mark as Not Done" : "Mark as Followed Up"}
                    </button>
                  </form>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Email</p>
                    <a
                      href={`mailto:${s.email}`}
                      className="text-orange-400 hover:underline"
                    >
                      {s.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                    <a
                      href={`tel:${s.phone}`}
                      className="text-gray-200 hover:text-orange-400 transition-colors"
                    >
                      {s.phone || "—"}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Package</p>
                    <p className="text-gray-200 capitalize">{s.package || "—"}</p>
                  </div>
                </div>

                {s.message && (
                  <div className="mt-3 p-3 rounded-xl bg-white/3 text-sm text-gray-400 italic">
                    &ldquo;{s.message}&rdquo;
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
