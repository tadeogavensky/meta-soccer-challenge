import React from "react";

import { TeamStats } from "../types/Stats";
import { Lineup, TeamInfo } from "../types/Match";

import pitch from "@/app/assets/images/pitch.jpg"
import Image from "next/image";

interface ZonesProps {
  leftTeamInfo?: TeamInfo;
  rightTeamInfo?: TeamInfo;
  leftTeam?: TeamStats;
  rightTeam?: TeamStats;
  leftLineup?: Lineup[];
  rightLineup?: Lineup[];
}

export const Zones: React.FC<ZonesProps> = ({
  leftTeamInfo,
  leftLineup,
  rightTeamInfo,
  leftTeam,
  rightTeam,
}) => {
  return (
    <div className="flex flex-col my-10 h-screen md:hidden">
      <div className="flex flex-row justify-center gap-10 mb-20  ">
        <div className="flex md:flex-row-reverse flex-col  items-center gap-10">
          <div
            className={`w-10 h-10 rounded-full bg-[#FDF764] text-white flex items-center justify-center`}
          ></div>
          <p className="font-primary text-white md:hidden">
            {leftTeamInfo?.clubAcronym}
          </p>
          <p className="font-primary text-white hidden md:block">
            {leftTeamInfo?.name}
          </p>
        </div>

        <div className="flex gap-4 bg-slate-600 bg-opacity-20 text-white px-6 items-center justify-center">
          <p className="text-2xl">{leftTeam?.goals}</p>
          <span>|</span>
          <p className="text-2xl">{rightTeam?.goals}</p>
        </div>

        <div className="flex md:flex-row flex-col  items-center gap-10">
          <div
            className={`w-10 h-10 rounded-full bg-[#FE9D43] text-white flex items-center justify-center`}
          ></div>
          <p className="font-primary text-white md:hidden">
            {rightTeamInfo?.clubAcronym}
          </p>
          <p className="font-primary text-white hidden md:block">
            {rightTeamInfo?.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <p className="uppercase text-white text-opacity-50">Attack zones</p>

        <div>

        <Image src={pitch} alt={""}/> 

        </div>

      </div>
    </div>
  );
};
