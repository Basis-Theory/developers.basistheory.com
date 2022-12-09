import React from "react";
import { 
  BasisTheoryProvider,
  useBasisTheory
} from '@basis-theory/basis-theory-react';

import styles from "./BasisTheoryComponentDisplay.module.css";

export const BasisTheoryComponentDisplay = ({ children }) => {
  const { bt } = useBasisTheory('key_XVB48UzHJ57TdPtmLhJa9e', { elements: true });

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
            <span>Live Card Element</span>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.element}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </BasisTheoryProvider>
  )
};