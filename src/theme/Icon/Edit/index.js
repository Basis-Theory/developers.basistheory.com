import React from "react";
import styles from "./styles.module.css";
import Github from "@site/static/img/shared/github.svg";
import clsx from "clsx";

export default function IconEdit({ className, ...restProps }) {
  return (
    <Github className={clsx([styles["icon-edit"], className])} {...restProps} />
  );
}
