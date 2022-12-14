import Github from "@site/static/img/shared/github.svg";
import React from "react";

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
