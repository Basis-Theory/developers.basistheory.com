import React from "react";

import styles from "./Intro.module.css";

export const Intro = ({ caption, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{caption}</div>
      <div className={styles["img-container"]}>{img}</div>
    </div>
  );
};
