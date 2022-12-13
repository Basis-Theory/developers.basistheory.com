import React from "react";
import { Button } from "../shared/Button";

import styles from "./SignInButton.module.css";

export const SignInButton = () => (
  <Button
    href="https://portal.basistheory.com/"
    target="_blank"
    variant="secondary"
    className={styles.button}
  >
    Sign In
  </Button>
);
