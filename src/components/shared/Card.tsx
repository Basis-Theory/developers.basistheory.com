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
  img,
  href,
  body,
  heading,
  cta,
  ...otherProps
}: PropsWithChildren<
  DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    href?: string;
    img?: React.ReactNode;
    heading?: React.ReactNode;
    body?: React.ReactNode;
    cta?: React.ReactNode;
  }
>) => {
  const history = useHistory();

  const onClick =
    href && !cta
      ? (e) => {
          e.preventDefault();
          history.push(href);
        }
      : undefined;

  const clickable = clsx({
    [styles.clickable]: href != undefined && !cta,
  });

  return (
    <div
      onClick={onClick}
      {...otherProps}
      className={clsx([className, styles.card, clickable])}
    >
      {img && <div className={styles.img}>{img}</div>}
      <div className={styles.body}>
        <div>
          {heading && <h3 className={styles.heading}>{heading}</h3>}
          {body ?? children}
        </div>
      </div>
      {cta && <div>{cta}</div>}
    </div>
  );
};

Card.TwoColumnLayout = TwoColumnLayout;

export { Card };
