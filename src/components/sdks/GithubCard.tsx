import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button } from "../shared/Button";
import styles from "./GithubCard.module.css";

import Contributor from "@site/static/img/github-card/contributor.svg";
import Github from "@site/static/img/github-card/github.svg";
import Star from "@site/static/img/github-card/star.svg";
import { SdkCard } from "../shared/SdkCard";
import { SDK } from "../types";

interface GithubCard {
  title: string;
  icon: SDK | `${SDK}`;
  organization: string;
  repository: string;
}

const placeholder = "Loading";
const placeholderUrl = "https://www.basistheory.com/";

export const GithubCard = ({
  title,
  organization,
  repository,
  icon,
}: GithubCard) => {
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

  return (
    <SdkCard
      icon={icon}
      className={styles.container}
      title={title}
      repository={repository}
      metadata={
        <div className={styles.metadata}>
          <p className={styles.version}>{releaseName ?? placeholder}</p>
          <p>
            <Star /> {stargazersCount ?? placeholder} Stars
          </p>
          <p>
            <Contributor /> {contributors ?? placeholder} Contributors
          </p>
        </div>
      }
      cta={
        <a href={githubUrl ?? placeholderUrl} target="_blank">
          <Button>
            <Github /> See it in GitHub
          </Button>
        </a>
      }
    />
  );
};
