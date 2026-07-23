export type EducationEntry = {
  institution: string;
  location: string;
  timeframe: string;
  note?: string;
};

export function isOngoing(timeframe: string) {
  return /present|sekarang/i.test(timeframe);
}

export const education: EducationEntry[] = [
  {
    institution: "UNISSULA (Universitas Islam Sultan Agung)",
    location: "Semarang",
    timeframe: "Sep 2024 – Present",
    note: "English Language Education",
  },
  {
    institution: "Purwadhika Technology School",
    location: "BSD",
    timeframe: "Feb 2026 – Jul 2026",
  },
  {
    institution: "BEC (Basic English Course)",
    location: "Pare, Kediri",
    timeframe: "Sep 2023 – Jun 2024",
    note: "Programs completed: CTC, TC, MS",
  },
];
