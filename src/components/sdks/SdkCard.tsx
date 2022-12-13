import React, { ReactNode } from "react";

import styles from "./SdkCard.module.css";

import Android from "@site/static/img/sdk-card/android.svg";
import DotNet from "@site/static/img/sdk-card/dotNet.svg";
import Go from "@site/static/img/sdk-card/go.svg";
import Ios from "@site/static/img/sdk-card/ios.svg";
import JavaScript from "@site/static/img/sdk-card/javascript.svg";
import Node from "@site/static/img/sdk-card/node.svg";
import Package from "@site/static/img/sdk-card/package.svg";
import Python from "@site/static/img/sdk-card/python.svg";
import ReactSvg from "@site/static/img/sdk-card/react.svg";
import Terraform from "@site/static/img/sdk-card/terraform.svg";
import clsx from "clsx";
import { Card } from "../shared/Card";
import { isValidSdk, SDK } from "../types";

interface SdkCard {
  icon: SDK | `${SDK}`;
  title: string;
  repository: string;
  metadata?: ReactNode;
  cta?: ReactNode;
  className?: string;
  href?: string;
}

const SdkCard = ({
  icon,
  title,
  repository,
  metadata,
  cta,
  className,
  href,
}: SdkCard) => {
  if (!icon) throw Error("Missing SDK icon");
  if (!isValidSdk(icon)) throw Error("Invalid SDK.");

  const Icon = {
    [SDK.DOT_NET]: DotNet,
    [SDK.GO]: Go,
    [SDK.PYTHON]: Python,
    [SDK.TERRAFORM]: Terraform,
    [SDK.NODE]: Node,
    [SDK.REACT]: ReactSvg,
    [SDK.JAVASCRIPT]: JavaScript,
    [SDK.ANDROID]: Android,
    [SDK.IOS]: Ios,
  }[icon];

  return (
    <Card
      className={clsx([className, styles.card])}
      href={href}
      img={<Icon width="100" height="100" />}
      cta={cta}
      heading={title}
    >
      <>
        <div className={styles.repository}>
          <Package /> {repository}
        </div>
        {metadata && <div className={styles.metadata}>{metadata}</div>}
      </>
    </Card>
  );
};

SdkCard.TwoColumnLayout = Card.TwoColumnLayout;

export { SdkCard };
