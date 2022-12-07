import React from "react";

import styles from "./QuickLinks.module.css";

export const QuickLinks = () => (
  <div className={styles.container}>
    <div>
      <h3>Quick Links</h3>
      <a className={styles.link} href="/docs/api/tokens#create-token">
        Creating Tokens
      </a>
      <a className={styles.link} href="/docs/api/applications">
        Applications
      </a>
      <a className={styles.link} href="/docs/api/applications/permissions">
        Permissions
      </a>
      <a className={styles.link} href="/docs/api/proxies/invoke-proxy">
        Send Data
      </a>
    </div>
    <div>
      <img src="/img/welcome.svg" />
    </div>
  </div>
);
