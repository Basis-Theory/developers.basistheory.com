import React from "react";

import styles from "./Permission.module.css";

export const Permission = ({ content }) => (
  <p className={styles.container}>
    <span className={styles.content}>{content}</span>
  </p>
);
