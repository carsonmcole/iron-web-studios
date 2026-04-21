import { neon } from "@neondatabase/serverless";

export type Submission = {
  id: string;
  name: string;
  business: string;
  phone: string;
  email: string;
  package: string;
  message: string;
  submittedAt: string;
  followedUp: boolean;
};

function sql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

async function ensureTable() {
  const db = sql();
  await db`
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      business TEXT NOT NULL,
      phone TEXT,
      email TEXT NOT NULL,
      package TEXT,
      message TEXT,
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      followed_up BOOLEAN NOT NULL DEFAULT FALSE
    )
  `;
}

function rowToSubmission(row: Record<string, unknown>): Submission {
  return {
    id: row.id as string,
    name: row.name as string,
    business: row.business as string,
    phone: (row.phone as string) ?? "",
    email: row.email as string,
    package: (row.package as string) ?? "",
    message: (row.message as string) ?? "",
    submittedAt: (row.submitted_at as Date).toISOString(),
    followedUp: row.followed_up as boolean,
  };
}

export async function saveSubmission(
  data: Omit<Submission, "id" | "submittedAt" | "followedUp">
): Promise<Submission> {
  await ensureTable();
  const db = sql();
  const id = crypto.randomUUID();
  const rows = await db`
    INSERT INTO submissions (id, name, business, phone, email, package, message)
    VALUES (${id}, ${data.name}, ${data.business}, ${data.phone ?? ""}, ${data.email}, ${data.package ?? ""}, ${data.message ?? ""})
    RETURNING *
  `;
  return rowToSubmission(rows[0]);
}

export async function getSubmissions(): Promise<Submission[]> {
  await ensureTable();
  const db = sql();
  const rows = await db`SELECT * FROM submissions ORDER BY submitted_at DESC`;
  return rows.map(rowToSubmission);
}

export async function toggleFollowUp(id: string): Promise<void> {
  await ensureTable();
  const db = sql();
  await db`
    UPDATE submissions SET followed_up = NOT followed_up WHERE id = ${id}
  `;
}
