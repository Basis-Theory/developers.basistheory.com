import { useHistory } from "@docusaurus/router";
import clsx from "clsx";
import React, {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  PropsWithChildren,
} from "react";

import styles from "./Card.module.css";

const TwoColumnLayout = ({ children }: PropsWithChildren) => (
  <div className={styles["card-container"]}>{children}</div>
);

const Card = ({
  children,
  className,
  href,
  ...otherProps
}: PropsWithChildren<
  DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    href?: string;
  }
>) => {
  const history = useHistory();

  const onClick = href
    ? (e) => {
        e.preventDefault();
        history.push(href);
      }
    : undefined;

  const clickable = clsx({
    [styles.clickable]: href != undefined,
  });

  return (
    <div
      onClick={onClick}
      {...otherProps}
      className={clsx([className, styles.card, clickable])}
    >
      {children}
    </div>
  );
};

Card.TwoColumnLayout = TwoColumnLayout;

export { Card };
