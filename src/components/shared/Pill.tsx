import React, { PropsWithChildren } from "react";

import styles from "./Pill.module.css";
import clsx, { ClassValue } from "clsx";

export const Pill = ({ children, className }: PropsWithChildren<{ className?: ClassValue }>) =>
  <div className={clsx(styles["pill-container"])}>
    <span className={clsx(styles.pill, className)}>{children}</span>
  </div>;
