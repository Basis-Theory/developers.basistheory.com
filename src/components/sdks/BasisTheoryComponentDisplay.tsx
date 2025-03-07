import React, { PropsWithChildren } from "react";
import { BasisTheoryProvider, useBasisTheory } from "@basis-theory/react-elements";

import styles from "./BasisTheoryComponentDisplay.module.css";

interface ComponentDisplay {
  title: string;
}

export const BasisTheoryComponentDisplay = ({ title, children }: PropsWithChildren<ComponentDisplay>) => {
  const { bt } = useBasisTheory(".");

  return (
    <BasisTheoryProvider bt={bt}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.window}>
              <div className={styles.action}></div>
              <div className={styles.action}></div>
              <div className={styles.action}></div>
            </div>
            <span>{title}</span>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.element}>{children}</div>
          </div>
        </div>
      </div>
    </BasisTheoryProvider>
  );
};
