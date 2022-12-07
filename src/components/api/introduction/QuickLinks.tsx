import React from "react";

import styles from "./QuickLinks.module.css";

export const QuickLinks = () => (
  <div className={styles.container}>
    <div>
      <h2>API Reference</h2>
      <h3>Quick Links</h3>
      <a className={styles.link} href="#getting-started">
        Before You Begin
      </a>
      <a className={styles.link} href="/docs/api/tokens">
        Creating Tokens
      </a>
      <a className={styles.link} href="/docs/api/applications">
        Applications
      </a>
      <a className={styles.link} href="/docs/api/applications/permissions">
        API Keys
      </a>
    </div>
    <div>
      <img src="/img/welcome.svg" />
    </div>
  </div>
);
