import Github from "@site/static/img/shared/github.svg";
import clsx from "clsx";
import React from "react";

import styles from "./GithubButton.module.css";

export const GithubButton = ({ className }) => (
  <a className={clsx([styles.github, className])} href="https://github.com/basis-theory" target="_blank">
    <Github />
  </a>
);
