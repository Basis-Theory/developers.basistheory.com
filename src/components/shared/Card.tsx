import React, { PropsWithChildren } from "react";

import styles from "./Card.module.css";

export const Card = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>{children}</div>
);
