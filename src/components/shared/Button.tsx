import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  ...otherProps
}: PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) => (
  <button {...otherProps} className={clsx([styles.button, className])}>
    {children}
  </button>
);
