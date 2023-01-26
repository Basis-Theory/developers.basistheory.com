import React, { PropsWithChildren } from "react";
import {
  BasisTheoryProvider,
  useBasisTheory
} from '@basis-theory/basis-theory-react';

import styles from "./BasisTheoryComponentDisplay.module.css";

interface ComponentDisplay {
  title: string;
}

export const BasisTheoryComponentDisplay = ({ title, children }: PropsWithChildren<ComponentDisplay>) => {
  const { bt } = useBasisTheory( '.', { elements: true });

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
            <div className={styles.element}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </BasisTheoryProvider>
  )
};
