import React, { ComponentProps } from "react";

import styles from "./Intro.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Sources = ComponentProps<typeof ThemedImage>["sources"];
interface Intro {
  title: string;
  caption: string;
  img?: React.ReactNode | Sources;
}

const hasSources = (val: unknown): val is Sources => !!(val as Sources)?.light && !!(val as Sources)?.dark;

export const Intro = ({ title, caption, img }: Intro) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {title && <h1>{title}</h1>}
        {caption}
      </div>
      <div className={styles["img-container"]}>
        {hasSources(img) ? (
          <ThemedImage
            alt="Section icon"
            sources={{
              light: useBaseUrl(img.light),
              dark: useBaseUrl(img.dark),
            }}
          />
        ) : (
          img
        )}
      </div>
    </div>
  );
};
