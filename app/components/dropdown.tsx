"use client";
import Image from "next/image";
import { useState } from "react";

import { Subteam } from "@/types/model";
import classes from "./dropdown.module.scss";
import downChevron from "@/assets/downChevron.svg";
import Cross from "@/assets/cross.svg";

export default function Dropdown({
  options,
  onChange,
  selectedValue,
}: {
  options: Subteam[];
  onChange: (newValue: string) => void;
  selectedValue: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <div className={classes.dropdown}>
      <div className={classes["button-container"]}>
        <button className={classes["dropdown-button"]} onClick={toggleDropdown}>
          {selectedValue || "Select a sub-team"}
          <div className={classes.icon}>
            <Image src={downChevron} alt="down chevron" />
          </div>
        </button>
      </div>
      <div
        className={`${classes["dropdown-menu"]} ${
          isOpen ? classes.active : ""
        }`}
      >
        <div className={classes["dropdown-menu-header"]}>
          <div className={classes["header-text"]}>Select a subteam </div>
          <button className={classes.cross} onClick={toggleDropdown}>
            <div className={classes["cross-icon"]}>
              <Image src={Cross} alt="cross icon" priority />
            </div>
          </button>
        </div>
        <ul>
          {options.map((subteam, index) => (
            <li
              key={index}
              onClick={() => {
                toggleDropdown();
                return onChange(subteam.title);
              }}
              className={
                subteam.title === selectedValue ? classes.selected : ""
              }
            >
              {subteam.title}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${classes["dropdown-overlay"]} ${
          isOpen ? classes.active : ""
        }`}
        onClick={toggleDropdown}
      ></div>
    </div>
  );
}
