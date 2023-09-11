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
            <th className="p-2">
              <p className="font-primary font-normal text-white">
                {leftTeamInfo?.name}
              </p>
              <p
                className={`border-rounded bg-[${leftTeamInfo?.clubLogo.color}]`}
              ></p>
            </th>
            <th className="text-white font-normal text-sm text-left font-primary p-2">
              <p>{}</p>
            </th>

            <th className="text-white font-normal text-sm text-center self-center font-primary">
              <p className="font-primary">{leftTactic}</p>
            </th>
            <th className="text-white font-normal text-sm text-center self-center font-primary"></th>
          </tr>
        </thead>
        <thead className="bg-gray-500 bg-opacity-20">
          <tr className="border-opacity-10 border-slate-50 border-2">
            <th className="text-white font-normal text-sm text-left font-primary p-2">
              Lineup
            </th>
            <th className="text-white font-normal text-sm text-left font-primary">
              Player
            </th>
            <th className="text-white font-normal text-sm text-center self-center font-primary w-12">
              <BsLightningFill size={25} />
            </th>
            <th className="text-white font-normal text-sm text-left font-primary w-12">
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
              <td colSpan={4}>No left lineup data available.</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className="w-full bg-transparent">
        <thead className="bg-gray-500 bg-opacity-20  ">
          <tr className="w-full border-opacity-10 border-slate-50 border-2">
            <th className="p-2" >
              <p className="font-primary font-normal text-white">
                {rightTeamInfo?.name}
              </p>
         
            </th>
            <th className="text-white font-normal text-sm text-left font-primary p-2">
              <p>{}</p>
            </th>

            <th className="text-white font-normal text-sm text-center self-center font-primary">
              <p className="font-primary">{rightTactic}</p>
            </th>
            <th className="text-white font-normal text-sm text-center self-center font-primary"></th>
          </tr>
        </thead>
        <thead className="bg-gray-500 bg-opacity-20">
          <tr className="border-opacity-10 border-slate-50 border-2">
            <th className="text-white font-normal text-sm text-left font-primary p-2">
              Lineup
            </th>
            <th className="text-white font-normal text-sm text-left font-primary">
              Player
            </th>
            <th className="text-white font-normal text-sm font-primary w-12">
              <BsLightningFill size={25} />
            </th>
            <th className="text-white font-normal text-sm text-left font-primary w-12">
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
