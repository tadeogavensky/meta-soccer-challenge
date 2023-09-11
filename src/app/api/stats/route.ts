import { NextResponse } from "next/server";

import statsData from "@/app/mock/stats.json";
import { MatchStats } from "@/app/types/Stats";

export async function GET(req: Request) {
  const matchStats: MatchStats = statsData;
  return NextResponse.json({ data: matchStats });
}
