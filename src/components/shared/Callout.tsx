import clsx from "clsx";
import React, { PropsWithChildren } from "react";

import styles from "./Callout.module.css";

import error from "@site/static/img/callout/error.svg";
import warning from "@site/static/img/callout/warning.svg";
import success from "@site/static/img/callout/success.svg";
import info from "@site/static/img/callout/info.svg";

export enum Callouts {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
}

interface Callout {
  type: Callouts;
  title: string;
  content: string;
}

export const Callout = ({
  type,
  title,
  content,
  children,
}: PropsWithChildren<Callout>) => {
  const containerClass = clsx({
    [styles.error]: type == Callouts.ERROR,
    [styles.warning]: type == Callouts.WARNING,
    [styles.info]: type == Callouts.INFO,
    [styles.success]: type == Callouts.SUCCESS,
  });

  const Svg = {
    [Callouts.ERROR]: error,
    [Callouts.WARNING]: warning,
    [Callouts.INFO]: info,
    [Callouts.SUCCESS]: success,
  }[type];

  return (
    <div className={clsx([styles.container, containerClass])}>
      <div>
        <Svg className={styles.svg} />
      </div>
      <div>
        {title && <p className={styles.title}>{title}</p>}
        <p className={styles.content}>{content ?? children}</p>
      </div>
    </div>
  );
};
