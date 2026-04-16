import fs from "fs";
import path from "path";

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

const DATA_DIR = process.env.DATA_DIR ?? path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "submissions.json");

function readAll(): Submission[] {
  if (!fs.existsSync(FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8")) as Submission[];
  } catch {
    return [];
  }
}

function writeAll(submissions: Submission[]) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(submissions, null, 2), "utf8");
}

export function saveSubmission(data: Omit<Submission, "id" | "submittedAt" | "followedUp">): Submission {
  const submissions = readAll();
  const entry: Submission = {
    ...data,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    followedUp: false,
  };
  submissions.unshift(entry);
  writeAll(submissions);
  return entry;
}

export function getSubmissions(): Submission[] {
  return readAll();
}

export function toggleFollowUp(id: string): void {
  const submissions = readAll();
  const idx = submissions.findIndex((s) => s.id === id);
  if (idx === -1) return;
  submissions[idx].followedUp = !submissions[idx].followedUp;
  writeAll(submissions);
}
