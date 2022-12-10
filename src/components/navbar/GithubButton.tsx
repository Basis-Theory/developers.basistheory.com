import React from "react";
import Github from "@site/static/img/github-card/github.svg";

import styles from "./GithubButton.module.css";

export const GithubButton = () => (
  <a
    className={styles.github}
    href="https://github.com/basis-theory"
    target="_blank"
  >
    <Github />
  </a>
);
