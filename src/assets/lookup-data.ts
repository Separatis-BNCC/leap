export const role = ["admin", "praeto", "aktivis", "member"] as const;
export function getRole(input: number) {
  return role[input - 1];
}

export const region = [
  "Kemanggisan",
  "Alam Sutera",
  "Bandung",
  "Malang",
] as const;
export function getRegion(input?: number) {
  if (!input) return undefined;
  if (input > region.length) return "Unknown";
  return region[input - 1];
}

export const faculty = [
  "School of Computer Science",
  "Scoll of Information System",
  "School of Design",
  "BINUS Business School Undergraduate Programs",
  "School of Accounting",
  "Faculty of Digital Communication and Hotel & Tourism",
  "Faculty of Humanities",
  "Faculty of Engineering",
  "Double Programs",
  "Master Track Programs",
] as const;
export function getFaculty(input?: number) {
  if (!input) return undefined;
  if (input > faculty.length) return "Unknown";
  return faculty[input - 1];
}

export const major = [
  "Artificial Intellegence",
  "Cyber Security",
  "Game Application and Technology",
  "Computer Science",
  "Data Science",
] as const;
export function getMajor(input?: number) {
  if (!input) return undefined;
  if (input > major.length) return "Unknown";
  return faculty[input - 1];
}
