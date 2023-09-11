"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { LineUp } from "./components/Lineup";
import { Lineup, Match } from "./types/Match";
import { Stats } from "./components/Stats";
import { MatchStats } from "./types/Stats";
import { Zones } from "./components/Zones";

export default function Match() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [displayedComponent, setDisplayedComponent] = useState<
    "lineup" | "stats" | "zones" | null
  >(null);

  const [matchData, setMatchData] = useState<Match | null>(null);
  const [statsData, setStatsData] = useState<MatchStats | null>(null);

  async function fetchData() {
    try {
      const matchResponse = await axios.get("/api/match");
      const statsResponse = await axios.get("/api/stats");

      console.log("Match Data:", matchResponse.data);
      console.log("Stats Data:", statsResponse.data);

      setMatchData(matchResponse.data.data);
      setStatsData(statsResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavbarItemClick = (index: number) => {
    setActiveItem(index);

    switch (index) {
      case 0:
        setDisplayedComponent("stats");
        break;
      case 1:
        setDisplayedComponent("lineup");
        break;
      case 2:
        setDisplayedComponent("zones");
        break;
      default:
        setDisplayedComponent(null);
    }
  };

  return (
    <>
      <Header />
      <Navbar
        onNavbarItemClick={handleNavbarItemClick}
        activeItem={activeItem}
      />

      <div className="">
        <div className="m-10">
          {displayedComponent === "lineup" && matchData && (
            <LineUp
              leftLineup={matchData.leftLineup}
              rightLineup={matchData.rightLineup}
              leftTactic={matchData.leftTactic}
              leftTeamInfo={matchData.leftTeamInfo}
              rightTeamInfo={matchData.rightTeamInfo}
              rightTactic={matchData.rightTactic}
            />
          )}
        </div>
        {displayedComponent === "stats" && statsData && (
          <Stats
            leftTeam={statsData.leftTeam}
            leftTeamInfo={matchData?.leftTeamInfo}
            rightTeamInfo={matchData?.rightTeamInfo}
            rightTeam={statsData.rightTeam}
          />
        )}

        {displayedComponent === "zones" && statsData && (
          <Zones
            leftTeam={statsData.leftTeam}
            leftTeamInfo={matchData?.leftTeamInfo}
            rightTeamInfo={matchData?.rightTeamInfo}
            rightTeam={statsData.rightTeam}
          />
        )}
      </div>
    </>
  );
}
