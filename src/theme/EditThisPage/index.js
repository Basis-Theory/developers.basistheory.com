import React from "react";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Github from "@site/static/img/github-card/github.svg";
import styles from "./index.module.css";
import clsx from "clsx";

export default function EditThisPage({ editUrl }) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx([ThemeClassNames.common.editThisPage, styles.container])}
    >
      <Github />

      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page"
      >
        Edit this page
      </Translate>
    </a>
  );
}
