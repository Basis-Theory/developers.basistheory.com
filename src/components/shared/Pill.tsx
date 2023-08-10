import React, { PropsWithChildren } from "react";

import styles from "./Pill.module.css";
import clsx, { ClassValue } from "clsx";

export const Pill = ({ children, className, title }: PropsWithChildren<{ className?: ClassValue, title?: string }>) =>
  <div className={clsx(styles["pill-container"])}>
    <span className={clsx(styles.pill, className)} title={title}>{children}</span>
  </div>;
