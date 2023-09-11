import React from "react";
import { BsLightningFill } from "react-icons/bs";
import { Lineup, Match, TeamInfo } from "../types/Match";

interface LineUpProps {
  leftLineup?: Lineup[];
  rightLineup?: Lineup[];
  leftTactic?: string;
  leftTeamInfo?: TeamInfo;
  rightTactic?: string;
  rightTeamInfo?: TeamInfo;
}

export const LineUp: React.FC<LineUpProps> = ({
  leftLineup,
  rightLineup,
  leftTactic,
  leftTeamInfo,
  rightTactic,
  rightTeamInfo,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <table className="w-full bg-transparent">
        <thead className="bg-gray-500 bg-opacity-20  ">
          <tr className="w-full border-opacity-10 border-slate-50 border-2">
            <th
              className="p-2 bg-gray-500 bg-opacity-20 border-opacity-10 border-slate-50 border-2"
              colSpan={4}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full bg-[#FDF764] text-white flex items-center justify-center`}
                  ></div>
                  <p className="font-primary font-normal text-white">
                    {leftTeamInfo?.name}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-primary text-white">{leftTactic}</p>

                  <div className="bg-black rounded-full h-[10px] w-[10px] p-4 flex border-2 justify-center items-center  border-pink-600">
                    <p className=" text-[10px] text-white">
                      {leftTeamInfo?.lineupOverall}
                    </p>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <thead className="bg-gray-500 bg-opacity-20">
          <tr className="border-opacity-10 border-slate-50 border-2">
            <th className="text-white font-normal text-sm text-left font-primary p-2">
              Lineup
            </th>
            <th className="border-opacity-10 border-slate-50 border-2 p-2 text-white font-normal text-sm text-left font-primary">
              Player
            </th>
            <th className="border-opacity-10 border-slate-50 border-2 p-2 text-white font-normal text-sm text-center self-center font-primary w-12">
              <BsLightningFill size={25} />
            </th>
            <th className="border-opacity-10 border-slate-50 border-2 p-2 text-white font-normal text-sm text-left font-primary w-12">
              Rating
            </th>
          </tr>
        </thead>

        <tbody>
          {leftLineup && leftLineup.length > 0 ? (
            leftLineup.map((lineup, index) => (
              <tr key={index} className="text-white font-primary">
                <td
                  className={`border-opacity-10 border-slate-50 border-2 p-2 w-[10%]`}
                >
                  <span className="font-bold mr-2"> {lineup.dorsal}</span>
                  <span
                    className={` ${
                      lineup.player.role === "Defender"
                        ? "text-blue-400"
                        : lineup.player.role === "Midfielder"
                        ? "text-green-400"
                        : lineup.player.role === "Goalkeeper"
                        ? "text-yellow-400"
                        : lineup.player.role === "Forward"
                        ? "text-pink-400"
                        : ""
                    }`}
                  >
                    {lineup.player.role === "Defender"
                      ? "CB"
                      : lineup.player.role === "Midfielder"
                      ? "CM"
                      : lineup.player.role === "Goalkeeper"
                      ? "GK"
                      : lineup.player.role === "Forward"
                      ? "ST"
                      : lineup.player.role}
                  </span>
                </td>
                <td className="border-opacity-10 border-slate-50 border-2 p-2 w-[40%] uppercase font-extrabold">
                  <span>{lineup.player.name.charAt(0)}.</span>

                  <span> {lineup.player.lastName}</span>
                </td>
                <td className="border-opacity-10 border-slate-50 border-2 p-2 w-[5%] text-center">
                  <span
                    className={`
                  ${
                    lineup.player.condition > 85
                      ? "text-green-500"
                      : lineup.player.condition < 70
                      ? "text-orange-400"
                      : "text-yellow-200"
                  }
                  
                  `}
                  >
                    {lineup.player.condition}
                  </span>
                </td>
                <td className="border-opacity-10 border-slate-50 border-2 p-2 w-[5%] text-center">
                  {lineup.player.overall / 10}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No left lineup data available.</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className="w-full bg-transparent">
        <thead>
          <tr>
            <th
              className="p-2 bg-gray-500 bg-opacity-20 border-opacity-10 border-slate-50 border-2"
              colSpan={4}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full bg-[#FE9D43] text-white flex items-center justify-center`}
                  ></div>
                  <p className="font-primary font-normal text-white">
                    {rightTeamInfo?.name}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-primary text-white">{rightTactic}</p>

                  <div className="bg-black rounded-full h-[10px] w-[10px] p-4 flex border-2 justify-center items-center  border-pink-600">
                    <p className=" text-[10px] text-white">
                      {rightTeamInfo?.lineupOverall}
                    </p>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <thead className="bg-gray-500 bg-opacity-20">
          <tr className="border-opacity-10 border-slate-50 border-2">
            <th className="border-opacity-10 border-slate-50 border-2 text-white font-normal text-sm text-left font-primary p-2">
              Lineup
            </th>
            <th className="border-opacity-10 border-slate-50 border-2 p-2 text-white font-normal text-sm text-left font-primary">
              Player
            </th>
            <th className=" border-opacity-10 border-slate-50 border-2 p-2 text-white font-normal text-sm font-primary w-12">
              <BsLightningFill size={25} />
            </th>
            <th className=" border-opacity-10 border-slate-50 border-2 p-2 text-white font-normal text-sm text-left font-primary w-12">
              Rating
            </th>
          </tr>
        </thead>

        <tbody>
          {rightLineup && rightLineup.length > 0 ? (
            rightLineup.map((lineup, index) => (
              <tr key={index} className="text-white font-primary">
                <td
                  className={`border-opacity-10 border-slate-50 border-2 p-2 w-[10%]`}
                >
                  <span className="font-bold mr-2"> {lineup.dorsal}</span>
                  <span
                    className={` ${
                      lineup.player.role === "Defender"
                        ? "text-blue-400"
                        : lineup.player.role === "Midfielder"
                        ? "text-green-400"
                        : lineup.player.role === "Goalkeeper"
                        ? "text-yellow-400"
                        : lineup.player.role === "Forward"
                        ? "text-pink-400"
                        : ""
                    }`}
                  >
                    {lineup.player.role === "Defender"
                      ? "CB"
                      : lineup.player.role === "Midfielder"
                      ? "CM"
                      : lineup.player.role === "Goalkeeper"
                      ? "GK"
                      : lineup.player.role === "Forward"
                      ? "ST"
                      : lineup.player.role}
                  </span>
                </td>
                <td className="border-opacity-10 border-slate-50 border-2 p-2 w-[40%] uppercase font-extrabold">
                  <span>{lineup.player.name.charAt(0)}.</span>

                  <span> {lineup.player.lastName}</span>
                </td>
                <td className="border-opacity-10 border-slate-50 border-2 p-2 w-[5%] text-center">
                  <span
                    className={`
                  ${
                    lineup.player.condition > 85
                      ? "text-green-500"
                      : lineup.player.condition < 70
                      ? "text-orange-400"
                      : "text-yellow-200"
                  }
                  
                  `}
                  >
                    {" "}
                    {lineup.player.condition}
                  </span>
                </td>
                <td className="border-opacity-10 border-slate-50 border-2 p-2 w-[5%] text-center">
                  {lineup.player.overall / 10}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No right lineup data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
