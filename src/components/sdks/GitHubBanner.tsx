import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./GitHubBanner.module.css";

interface GitHubBanner {
  title: string;
  icon: string;
  organization: string;
  repository: string;
}

export const GitHubBanner = ({ title, icon, organization, repository }: GitHubBanner) => {
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
    const { data } = await axios.get(`https://api.github.com/repos/${organization}/${repository}/releases/latest`);

    setReleaseName(data.name);
  };

  const loadContributorsloadContributors = async () => {
    const { data } = await axios.get(`https://api.github.com/repos/${organization}/${repository}/contributors`);

    setContributors(data.length);
  };

  useEffect(() => {
    if (organization && repository) {
      loadMetadata();
      loadRelease();
      loadContributorsloadContributors();
    }
  }, [organization, repository]);

  return (
    <div>
      <h3>{title}</h3>
      <p>{icon}</p>
      <p>{repository}</p>
      <p>{stargazersCount} Stars</p>
      <p>{contributors} Contributors</p>
      <p>{releaseName}</p>
      <a href={githubUrl} target="_blank">
        See it in GitHub
      </a>
    </div>
  );
};