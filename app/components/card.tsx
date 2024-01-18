"use client";
import Image from "next/image";
import Link from "next/link";

import classes from "./card.module.scss";
import { useState } from "react";
import playIcon from "@/assets/play.svg";
import data from "@/public/data.json";

interface CardProps {
  selectedSubTeam: string;
}

export default function Card({ selectedSubTeam }: CardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedSubTeamName = data.data.team.subTeamCard.find(
    (subTeam) => subTeam.title === selectedSubTeam
  );

  if (!selectedSubTeamName) {
    return <div>no card matching selected subteam</div>;
  }

  const getYouTubeID = (url: string) => {
    const urlArr = url.split("v=");
    const id = urlArr.length > 1 ? urlArr[1] : null;
    return id;
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div className={classes.information}>
          <div className={classes.text}>21 jobs available</div>
          <div className={classes.title}>{selectedSubTeamName.title}</div>
          <div className={classes.text}>{selectedSubTeamName.body}</div>
          <Link
            href={selectedSubTeamName.cta[0].href}
            className={classes["find-jobs-button"]}
          >
            {selectedSubTeamName.cta[0].text}
          </Link>
        </div>
        <div className={classes["media-container"]}>
          {selectedSubTeamName.video?.length ? (
            <div className={classes["video-container"]}>
              {!isPlaying && selectedSubTeamName.video[0]?.placeholder ? (
                <div className={classes["image-overlay"]}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={selectedSubTeamName.video[0].placeholder.url}
                    alt={selectedSubTeamName.video[0].placeholder.alt}
                    className={classes["image-component"]}
                  />

                  <button
                    className={classes["play-button-container"]}
                    type="button"
                    onClick={playVideo}
                  >
                    <div className={classes["play-label"]}>
                      <div>Watch the film</div>
                    </div>
                    <div className={classes["play-icon"]}>
                      <Image
                        src={playIcon}
                        alt="play video"
                        width={70}
                        height={70}
                      />
                    </div>
                  </button>
                </div>
              ) : selectedSubTeamName.video[0].video ? (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${getYouTubeID(
                    selectedSubTeamName.video[0]?.video.url
                  )}?autoplay=1`}
                  title={selectedSubTeamName.video[0].video?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={classes["iframe"]}
                ></iframe>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.gradient}></div>
    </div>
  );
}
