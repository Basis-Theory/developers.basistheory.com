import React from "react";

import styles from "./QuickLinks.module.css";

export const QuickLinks = () => (
  <div className={styles.container}>
    <div>
      <h3>Quick Links</h3>
      <a className={styles.link} href="/docs/expressions/filters">Filters</a>
      <a className={styles.link} href="/docs/expressions/detokenization">Detokenization</a>
      <a className={styles.link} href="/docs/expressions/aliasing">Aliasing</a>
      <a className={styles.link} href="/docs/expressions/fingerprints">Fingerprints</a>
      <a className={styles.link} href="/docs/expressions/masks">Masks</a>
      <a className={styles.link} href="/docs/expressions/search-indexes">Search Indexes</a>
    </div>
    <div>
      <img src="/img/expressions-intro.svg" />
    </div>
  </div>
);
