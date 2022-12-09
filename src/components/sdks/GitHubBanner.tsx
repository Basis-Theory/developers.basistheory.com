import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./GitHubBanner.module.css";
import { Card } from "../shared/Card";
import { Button } from "../shared/Button";

import GithubRepo from "../../../static/img/github-banner/repository.svg";
import Star from "../../../static/img/github-banner/Star.svg";
import Contributor from "../../../static/img/github-banner/Contributor.svg";
import Github from "../../../static/img/github-banner/Github.svg";

interface GitHubBanner {
  title: string;
  icon: string;
  organization: string;
  repository: string;
}

const placeholder = "loading";

export const GitHubBanner = ({
  title,
  icon,
  organization,
  repository,
}: GitHubBanner) => {
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
    <Card>
      <div className={styles.icon}>
        <p>{icon}</p>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>

        <div className={styles.repository}>
          <p>
            <GithubRepo /> {repository}
          </p>
        </div>
        <div className={styles.metadata}>
          <p className={styles.version}>{releaseName ?? placeholder}</p>
          <p>
            <Star /> {stargazersCount ?? placeholder} Stars{" "}
          </p>
          <p>
            <Contributor /> {contributors ?? placeholder} Contributors
          </p>
        </div>
      </div>
      <div>
        <a href={githubUrl ?? placeholder} target="_blank">
          <Button>
            <Github /> See it in GitHub
          </Button>
        </a>
      </div>
    </Card>
  );
};
