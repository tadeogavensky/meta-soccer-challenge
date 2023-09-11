import Image from "next/image";
import React from "react";
import team1 from "@/app/assets/images/team1.png";
import team2 from "@/app/assets/images/team2.png";
import { TeamStats } from "../types/Stats";
import { Lineup, TeamInfo } from "../types/Match";

interface StatsPro {
  leftTeamInfo?: TeamInfo;
  rightTeamInfo?: TeamInfo;
  leftTeam?: TeamStats;
  rightTeam?: TeamStats;
  leftLineup?: Lineup[];
  rightLineup?: Lineup[];
}

export const Stats: React.FC<StatsPro> = ({
  leftTeamInfo,
  leftLineup,
  rightTeamInfo,
  leftTeam,
  rightTeam,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center ">
      <div className="flex flex-col border-slate-50 border-b-2 border-opacity-20 w-screen  ">
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

        <div className="">
          <StatsGraph leftTeam={leftTeam} rightTeam={rightTeam} />
        </div>
      </div>
    </div>
  );
};

const StatsGraph: React.FC<StatsPro> = ({ leftTeam, rightTeam }) => {
  // Calculate the proportion of the stats values

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.shots}</p>
        <p className="text-center uppercase">Total shots</p>
        <p className="text-center">{rightTeam?.shots}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.shotsOnTarget}</p>
        <p className="text-center uppercase">Shots on target</p>
        <p className="text-center">{rightTeam?.shotsOnTarget}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.shotsOffTarget}</p>
        <p className="text-center uppercase">Shots off target</p>
        <p className="text-center">{rightTeam?.shotsOffTarget}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.assists}</p>
        <p className="text-center uppercase">Assists</p>
        <p className="text-center">{rightTeam?.assists}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.passes}</p>
        <p className="text-center uppercase">Passes</p>
        <p className="text-center">{rightTeam?.passes}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.shortPasses}</p>
        <p className="text-center uppercase">Short passes</p>
        <p className="text-center">{rightTeam?.shortPasses}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.longPasses}</p>
        <p className="text-center uppercase">Long passes</p>
        <p className="text-center">{rightTeam?.longPasses}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.fouls}</p>
        <p className="text-center uppercase">Fouls</p>
        <p className="text-center">{rightTeam?.fouls}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.yellowCards}</p>
        <p className="text-center uppercase">Yellow cards</p>
        <p className="text-center">{rightTeam?.yellowCards}</p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 text-white">
        <p className="text-center">{leftTeam?.redCards}</p>
        <p className="text-center uppercase">Red cards</p>
        <p className="text-center">{rightTeam?.redCards}</p>
      </div>
    </div>
  );
};

const StatBar: React.FC<any> = ({ stats }) => {
  // Calculate the total sum of all stats
  const total = stats.reduce((acc: any, stat: any) => acc + stat.value, 0);

  return (
    <div className="grid grid-cols-3 grid-rows-2 text-white">
      {stats.map((stat: any, index: any) => (
        <div key={index} className="flex items-center">
          <div
            className={`h-4 w-${(stat.value / total) * 100} ${
              stat.color
            } rounded-full`}
          ></div>
        </div>
      ))}
    </div>
  );
};
