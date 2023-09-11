import { NextResponse } from "next/server";

import matchData from "@/app/mock/match.json";
import { Match } from "@/app/types/Match";

export async function GET(req: Request) {
  const match: Match = matchData;
  return NextResponse.json({ data: match });
}
