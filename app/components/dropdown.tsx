"use client";
import Image from "next/image";
import { useState } from "react";

import { Subteam } from "@/types/model";
import classes from "./dropdown.module.scss";
import downChevron from "@/assets/downChevron.svg";
import Cross from "@/assets/cross.svg";

export default function Dropdown({
  subteams,
  setSelectedSubTeam,
  selectedSubTeam,
}: {
  subteams: Subteam[];
  setSelectedSubTeam: any;
  selectedSubTeam: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <div className={classes.dropdown}>
      <button className={classes["dropdown-button"]} onClick={toggleDropdown}>
        {selectedSubTeam || "Select a sub-team"}
        <div className={classes.icon}>
          <Image src={downChevron} alt="down chevron" />
        </div>
      </button>
      {isOpen && (
        <div
          className={`${classes["dropdown-menu"]} ${
            isOpen ? classes.active : ""
          }`}
        >
          <div className={classes["dropdown-menu-header"]}>
            <div>Select a subteam </div>
            <button className={classes.cross} onClick={toggleDropdown}>
              <div className={classes["cross-icon"]}>
                <Image src={Cross} alt="cross icon" priority />
              </div>
            </button>
          </div>
          <ul>
            {subteams.map((subteam, index) => (
              <li
                key={index}
                onClick={() => {
                  toggleDropdown();
                  return setSelectedSubTeam(subteam.title);
                }}
                className={
                  subteam.title === selectedSubTeam ? classes.selected : ""
                }
              >
                {subteam.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
