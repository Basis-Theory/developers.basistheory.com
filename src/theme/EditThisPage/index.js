import { ThemeClassNames } from "@docusaurus/theme-common";
import Translate from "@docusaurus/Translate";
import Github from "@site/static/img/shared/github.svg";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

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
