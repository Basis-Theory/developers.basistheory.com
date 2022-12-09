import clsx from "clsx";
import React, {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  PropsWithChildren,
} from "react";

import styles from "./Card.module.css";

export const Card = ({
  children,
  className,
  ...otherProps
}: PropsWithChildren<
  DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => (
  <div {...otherProps} className={clsx([className, styles.container])}>
    {children}
  </div>
);
