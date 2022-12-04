import React from "react";
import { Button } from "@site/src/components/shared/Button";

import styles from "./AuthButtons.module.css";

export const AuthButtons = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button href="https://portal.basistheory.com/register" target="_blank">
          Sign Up
        </Button>
      </div>
      <div>
        <Button
          href="https://portal.basistheory.com/"
          target="_blank"
          variant="secondary"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};
