import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button } from "../shared/Button";
import styles from "./GithubCard.module.css";
import utils from "./utils.module.css";

import Contributor from "@site/static/img/sdk/github-card/contributor.svg";
import Star from "@site/static/img/sdk/github-card/star.svg";
import Package from "@site/static/img/sdk/package.svg";
import Github from "@site/static/img/shared/github.svg";
import { Card } from "../shared/Card";
import { Version } from "../shared/Version";
import { isValidSdk, SDK } from "../types";
import { getSdkIcon } from "./utils";
import clsx from "clsx";

interface GithubCard {
  heading: string;
  icon: SDK | `${SDK}`;
  organization: string;
  repository: string;
  version?: string;
}

const placeholder = "Loading";
const placeholderUrl = "https://www.basistheory.com/";

export const GithubCard = ({ heading, organization, repository, icon, version }: GithubCard) => {
  if (!icon) throw Error("Missing SDK icon");
  if (!isValidSdk(icon)) throw Error("Invalid SDK.");

  const [githubUrl, setGithubUrl] = useState<string>("");
  const [stargazersCount, setStargazersCount] = useState<number>(null);
  const [releaseName, setReleaseName] = useState<string>(null);
  const [contributors, setContributors] = useState<number>(null);

  const loadMetadata = async () => {
    const { data } = await axios.get(`https://api.github.com/repos/${organization}/${repository}`);

    setGithubUrl(data.html_url);
    setStargazersCount(data.stargazers_count);
  };

  const loadRelease = async () => {
    // catches 404 from github when trying to load android/iOS releases
    try {
      const { data } = await axios.get(`https://api.github.com/repos/${organization}/${repository}/releases/latest`);

      setReleaseName(data.name);
    } catch (err) {}
  };

  const loadContributors = async () => {
    const { data } = await axios.get(`https://api.github.com/repos/${organization}/${repository}/contributors`);

    setContributors(data.length);
  };

  useEffect(() => {
    if (organization && repository) {
      loadMetadata();

      if (!version) {
        loadRelease();
      }

      loadContributors();
    }
  }, [organization, repository, version]);

  const Icon = getSdkIcon(icon);

  return (
    <Card
      hoverable={false}
      img={
        <div className={clsx([styles["gh-card--logo"], utils["round-border"]])}>
          <Icon />
        </div>
      }
      className={styles["gh-card"]}
      heading={<Card.PrimaryHeader>{heading}</Card.PrimaryHeader>}
      cta={
        <Button href={githubUrl ?? placeholderUrl} className={styles["gh-button"]} target="_blank">
          <Github /> See it in GitHub
        </Button>
      }
    >
      <>
        <div className={utils.repository}>
          <Package /> {repository}
        </div>

        <div className={styles.metadata}>
          {(version || releaseName) && <Version>{version ?? releaseName ?? placeholder}</Version>}
          <p>
            <Star /> {stargazersCount ?? placeholder} Stars
          </p>
          <p>
            <Contributor /> {contributors ?? placeholder} Contributors
          </p>
        </div>
      </>
    </Card>
  );
};
