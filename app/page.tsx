"use client";
import { useState } from "react";

import "./styles/main.scss";
import classes from "./page.module.scss";
import Card from "./components/card";
import Button from "./components/button";
import data from "@/public/data.json";
import Dropdown from "./components/dropdown";

const { subTeamCard } = data.data.team;

export default function Home() {
  const [selectedSubTeamName, setSelectedSubTeamName] = useState(
    subTeamCard[0].title
  );

  return (
    <main className={classes.main}>
      <header className={classes.header}>Sub-teams</header>
      <div className={classes.intro}>
        <p className={classes["desktop-only"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className={classes["mobile-only"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={`${classes["button-row"]} ${classes["desktop-only"]}`}>
        {subTeamCard.map((subteam, index) => (
          <Button
            key={index}
            content={subteam.title}
            onClick={() => setSelectedSubTeamName(subteam.title)}
            isActive={selectedSubTeamName === subteam.title}
          />
        ))}
      </div>
      <div className={classes["mobile-only"]}>
        <Dropdown
          options={subTeamCard}
          onChange={setSelectedSubTeamName}
          selectedValue={selectedSubTeamName}
        />
      </div>

      <Card selectedSubTeam={selectedSubTeamName} />
    </main>
  );
}
