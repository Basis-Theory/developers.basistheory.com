import clsx from "clsx";
import React, { PropsWithChildren } from "react";

import styles from "./Permission.module.css";

interface Permission {
  content?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Permission = ({
  content,
  variant,
  children,
}: PropsWithChildren<Permission>) => {
  const classNames = clsx({
    [styles.primary]: variant == "primary",
    [styles.secondary]: variant == "secondary",
  });

  return <code className={classNames}>{content ?? children}</code>;
};
