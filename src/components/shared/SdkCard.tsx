import React, { ReactNode } from "react";

import styles from "./SdkCard.module.css";
import { Card } from "../shared/Card";

import Package from "@site/static/img/sdk-card/package.svg";
import Android from "@site/static/img/sdk-card/android.svg";
import DotNet from "@site/static/img/sdk-card/dotNet.svg";
import Go from "@site/static/img/sdk-card/go.svg";
import Ios from "@site/static/img/sdk-card/ios.svg";
import Node from "@site/static/img/sdk-card/node.svg";
import Python from "@site/static/img/sdk-card/python.svg";
import ReactSvg from "@site/static/img/sdk-card/react.svg";
import Terraform from "@site/static/img/sdk-card/terraform.svg";
import clsx from "clsx";

interface SdkCard {
  title: string;
  repository: string;
  metadata?: ReactNode;
  cta?: ReactNode;
  className: string;
}

export const SdkCard = ({
  title,
  repository,
  metadata,
  cta,
  className,
}: SdkCard) => {
  const Icon = {
    ".NET SDK": DotNet,
    "Go SDK": Go,
    "Python SDK": Python,
    "Terraform SDK": Terraform,
    "Node.js SDK": Node,
    "React SDK": ReactSvg,
    "Android SDK": Android,
    "iOS SDK": Ios,
  }[title];

  return (
    <Card className={clsx([className, styles.container])}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <div className={styles.repository}>
          <p>
            <Package /> {repository}
          </p>
        </div>
        {metadata && <div className={styles.metadata}>{metadata}</div>}
      </div>
      {cta && <div>{cta}</div>}
    </Card>
  );
};
