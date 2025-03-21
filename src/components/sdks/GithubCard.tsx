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
  fetchSri?: boolean;
}

interface SriData {
  version: string;
  integrity: string;
}

interface RepoData {
  url: string;
  stars: number;
  contributors: number;
  latestRelease: string | null;
  sri?: SriData;
  loading: boolean;
  error: boolean;
}

const placeholder = "Loading";
const SRI_ENDPOINT = "https://js.basistheory.com/sri/?version";

const repoDataCache = new Map<string, RepoData>();

const truncateHash = (hash: string, maxLength = 20) => {
  if (!hash || hash.length <= maxLength) return hash;
  return `${hash.substring(0, maxLength)}...`;
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy: ", err);
  });
};

export const GithubCard = ({ heading, organization, repository, icon, version, fetchSri = false }: GithubCard) => {
  if (!icon) throw Error("Missing SDK icon");
  if (!isValidSdk(icon)) throw Error("Invalid SDK.");

  const [repoData, setRepoData] = useState<RepoData>({
    url: "",
    stars: null,
    contributors: null,
    latestRelease: null,
    loading: true,
    error: false,
  });

  const [copySuccess, setCopySuccess] = useState(false);

  const cacheKey = `${organization}/${repository}`;
  const repoUrl = `https://github.com/${organization}/${repository}`;

  const handleCopySri = () => {
    if (repoData.sri?.integrity) {
      copyToClipboard(repoData.sri.integrity);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  useEffect(() => {
    const fetchRepoData = async () => {
      if (repoDataCache.has(cacheKey)) {
        const cachedData = repoDataCache.get(cacheKey);
        setRepoData(cachedData);
        return;
      }

      try {
        const { data: repoData } = await axios.get(`https://api.github.com/repos/${organization}/${repository}`);

        let releaseData = null;
        let sriData = null;
        let contributorsCount = 0;

        try {
          const { data: contributors } = await axios.get(`https://api.github.com/repos/${organization}/${repository}/contributors`);
          contributorsCount = contributors.length;
        } catch (err) {
          console.error(`Error fetching contributors for ${repository}:`, err);
        }

        if (!version) {
          try {
            const { data: release } = await axios.get(`https://api.github.com/repos/${organization}/${repository}/releases/latest`);
            releaseData = release.name;
          } catch (err) {
            console.error(`Error fetching releases for ${repository}:`, err);
          }
        }

        if (fetchSri) {
          try {
            const { data: sri } = await axios.get(SRI_ENDPOINT);
            sriData = sri;
          } catch (err) {
            console.error(`Error fetching SRI data:`, err);
          }
        }

        const newRepoData = {
          url: repoData.html_url || repoUrl,
          stars: repoData.stargazers_count || 0,
          contributors: contributorsCount,
          latestRelease: releaseData,
          sri: sriData,
          loading: false,
          error: false,
        };

        repoDataCache.set(cacheKey, newRepoData);
        setRepoData(newRepoData);
      } catch (err) {
        console.error(`Error fetching GitHub data for ${repository}:`, err);
        setRepoData({
          url: repoUrl,
          stars: 0,
          contributors: 0,
          latestRelease: version || null,
          loading: false,
          error: true,
        });
      }
    };

    if (organization && repository) {
      fetchRepoData();
    }
  }, [organization, repository, version, cacheKey, fetchSri, repoUrl]);

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
        <Button href={repoData.url || repoUrl} className={styles["gh-button"]} target="_blank">
          <Github /> See it in GitHub
        </Button>
      }
    >
      <>
        <div className={utils.repository}>
          <Package /> {repository}
        </div>
        <div className={styles.metadata}>
          {(version || repoData.latestRelease) && <Version>{version || repoData.latestRelease || placeholder}</Version>}
          <p>
            <Star /> {repoData.loading ? placeholder : repoData.stars || "0"} Stars
          </p>
          <p>
            <Contributor /> {repoData.loading ? placeholder : repoData.contributors || "0"} Contributors
          </p>
        </div>
        {fetchSri && repoData.sri && (
          <div className={styles.sriContainer}>
            <p className={styles.sriHash} title={repoData.sri.integrity}>
              SRI: {truncateHash(repoData.sri.integrity, 24)}
              <button onClick={handleCopySri} className={styles.copyButton} aria-label="Copy SRI hash to clipboard">
                {copySuccess ? (
                  <span className={styles.copySuccess}>✓</span>
                ) : (
                  <svg className={styles.copyIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor" />
                  </svg>
                )}
              </button>
            </p>
          </div>
        )}
      </>
    </Card>
  );
};
