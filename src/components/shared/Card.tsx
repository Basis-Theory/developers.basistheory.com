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

const PrimaryHeader = ({ children }) => (
  <p className={clsx([styles.header, styles["primary-header"]])}>{children}</p>
);

const SecondaryHeader = ({ children }) => (
  <p className={clsx([styles.header, styles["secondary-header"]])}>
    {children}
  </p>
);

interface Card {
  href?: string;
  img?: React.ReactNode;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  hoverable?: boolean;
  cta?: React.ReactNode;
  column?: boolean;
  openInNewWindow: boolean;
}

const Card = ({
  children,
  className,
  img,
  href,
  body,
  heading,
  cta,
  hoverable = true,
  column = false,
  openInNewWindow = false,
  ...otherProps
}: PropsWithChildren<
  DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> & Card
>) => {
  const history = useHistory();

  const onClick =
    href && !cta
      ? (e) => {
          e.preventDefault();

          if (href.startsWith("https") || openInNewWindow) {
            window.open(href, "_blank");
          } else {
            history.push(href);
          }
        }
      : undefined;

  const classNames = clsx({
    [styles["flex-direction"]]: column,
    [styles.clickable]: href != undefined && !cta,
    [styles.hoverable]: hoverable,
  });

  return (
    <div
      onClick={onClick}
      {...otherProps}
      className={clsx([className, styles.card, classNames])}
    >
      {img && <div className={styles.img}>{img}</div>}
      <div className={styles.body}>
        <div>
          <div>
            {typeof heading === "string" ? (
              <SecondaryHeader>{heading}</SecondaryHeader>
            ) : (
              heading
            )}
          </div>
          <div>{body ?? children}</div>
        </div>
      </div>
      {cta && <div>{cta}</div>}
    </div>
  );
};

Card.TwoColumnLayout = TwoColumnLayout;
Card.PrimaryHeader = PrimaryHeader;

export { Card };
