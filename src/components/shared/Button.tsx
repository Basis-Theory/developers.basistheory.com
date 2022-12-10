import clsx from "clsx";
import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  variant = "primary",
  ...other
}: PropsWithChildren<{
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}>) => {
  const variantClass = clsx({
    [styles.primary]: variant == "primary",
    [styles.secondary]: variant == "secondary",
  });

  const defaultElement = other.href ? "a" : "button";
  const Root: React.ElementType = defaultElement;

  return (
    <Root {...other} className={clsx([styles.button, variantClass, className])}>
      {children}
    </Root>
  );
};
