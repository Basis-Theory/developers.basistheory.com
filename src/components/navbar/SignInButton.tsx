import React from "react";
import { Button } from "../shared/Button";

import styles from "./SignInButton.module.css";

export const SignInButton = ({
  variant = "secondary",
}: {
  variant: "primary" | "secondary";
}) => (
  <Button
    href="https://portal.basistheory.com/"
    target="_blank"
    variant={variant}
    className={styles.button}
  >
    Sign In
  </Button>
);
