import clsx from "clsx";
import React, { PropsWithChildren } from "react";

import styles from "./Alert.module.css";

import error from "@site/static/img/alert/error.svg";
import warning from "@site/static/img/alert/warning.svg";
import success from "@site/static/img/alert/success.svg";
import info from "@site/static/img/alert/info.svg";

export enum Alerts {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
  NEUTRAL = "neutral"
}

interface Alert {
  type: Alerts;
  title: string;
  content: string;
}

export const Alert = ({
  type = Alerts.INFO,
  title,
  content,
  children,
}: PropsWithChildren<Alert>) => {
  const containerClass = clsx({
    [styles.error]: type == Alerts.ERROR,
    [styles.warning]: type == Alerts.WARNING,
    [styles.info]: type == Alerts.INFO,
    [styles.success]: type == Alerts.SUCCESS,
    [styles.neutral]: type == Alerts.NEUTRAL,
  });

  const Svg = {
    [Alerts.ERROR]: error,
    [Alerts.WARNING]: warning,
    [Alerts.INFO]: info,
    [Alerts.SUCCESS]: success,
  }[type];

  return (
    <div className={clsx([styles.container, containerClass])}>
      {Svg &&<div>
         <Svg className={styles.svg} />
      </div>}
      <div>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.content}>{content ?? children}</div>
      </div>
    </div>
  );
};
