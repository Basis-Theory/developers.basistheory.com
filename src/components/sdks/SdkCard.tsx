import React, { ReactNode } from "react";

import styles from "./SdkCard.module.css";

import clsx from "clsx";
import { Card } from "../shared/Card";
import { isValidSdk, SDK } from "../types";

import Package from "@site/static/img/sdk/package.svg";
import { getSdkIcon } from "./utils";

interface SdkCard
  extends Pick<
    React.ComponentProps<typeof Card>,
    "img" | "heading" | "cta" | "href" | "className" | "hoverable"
  > {
  icon: SDK | `${SDK}`;
  repository: string;
  metadata?: ReactNode;
}

const SdkCard = ({
  icon,
  heading,
  repository,
  cta,
  className,
  href,
  hoverable,
}: SdkCard) => {
  if (!icon) throw Error("Missing SDK icon");
  if (!isValidSdk(icon)) throw Error("Invalid SDK.");

  const Icon = getSdkIcon(icon);

  return (
    <Card
      hoverable={hoverable}
      className={clsx([className, styles.card])}
      href={href}
      img={<Icon width="100" height="100" />}
      cta={cta}
      heading={heading}
    >
      <>
        <div className={styles.repository}>
          <Package /> {repository}
        </div>
      </>
    </Card>
  );
};

SdkCard.TwoColumnLayout = Card.TwoColumnLayout;

export { SdkCard };
