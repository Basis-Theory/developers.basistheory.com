import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button } from "../shared/Button";
import styles from "./GithubCard.module.css";

import Contributor from "@site/static/img/github-card/contributor.svg";
import Github from "@site/static/img/github-card/github.svg";
import Star from "@site/static/img/github-card/star.svg";
import Package from "@site/static/img/sdk-card/package.svg";
import { Card } from "../shared/Card";
import { isValidSdk, SDK } from "../types";
import { Version } from "../shared/Version";
import { getSdkIcon } from "./utils";

interface GithubCard {
  heading: string;
  icon: SDK | `${SDK}`;
  organization: string;
  repository: string;
}

const placeholder = "Loading";
const placeholderUrl = "https://www.basistheory.com/";

export const GithubCard = ({
  heading,
  organization,
  repository,
  icon,
}: GithubCard) => {
  if (!icon) throw Error("Missing SDK icon");
  if (!isValidSdk(icon)) throw Error("Invalid SDK.");

  const [githubUrl, setGithubUrl] = useState<string>("");
  const [stargazersCount, setStargazersCount] = useState<number>(null);
  const [releaseName, setReleaseName] = useState<string>(null);
  const [contributors, setContributors] = useState<number>(null);

  const loadMetadata = async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${organization}/${repository}`
    );

    setGithubUrl(data.html_url);
    setStargazersCount(data.stargazers_count);
  };

  const loadRelease = async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${organization}/${repository}/releases/latest`
    );

    setReleaseName(data.name);
  };

  const loadContributors = async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${organization}/${repository}/contributors`
    );

    setContributors(data.length);
  };

  useEffect(() => {
    if (organization && repository) {
      loadMetadata();
      loadRelease();
      loadContributors();
    }
  }, [organization, repository]);

  const Icon = getSdkIcon(icon);

  return (
    <Card
      hoverable={false}
      img={<Icon />}
      className={styles["gh-card"]}
      heading={<Card.PrimaryHeader>{heading}</Card.PrimaryHeader>}
      cta={
        <Button href={githubUrl ?? placeholderUrl} target="_blank">
          <Github /> See it in GitHub
        </Button>
      }
    >
      <>
        <div className={styles.repository}>
          <Package /> {repository}
        </div>

        <div className={styles.metadata}>
          <Version>{releaseName ?? placeholder}</Version>
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
