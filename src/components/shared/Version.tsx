import React, { PropsWithChildren } from "react";

import styles from "./Version.module.css";

export const Version = ({ children }: PropsWithChildren) => (
  <p className={styles.version}>{children}</p>
);
