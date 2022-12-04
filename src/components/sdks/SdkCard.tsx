import React, { ReactNode, ComponentProps } from "react";

import styles from "./SdkCard.module.css";
import utils from "./utils.module.css";

import clsx from "clsx";
import { Card } from "../shared/Card";
import { isValidSdk, SDK } from "../types";

import Package from "@site/static/img/sdk/package.svg";
import { getSdkIcon } from "./utils";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface SdkCard
  extends Pick<
    ComponentProps<typeof Card>,
    "img" | "heading" | "cta" | "href" | "className" | "hoverable"
  > {
  icon?: SDK | `${SDK}`;
  repository: string;
  metadata?: ReactNode;
  sources?: ComponentProps<typeof ThemedImage>["sources"];
}

const SdkCard = ({
  icon,
  heading,
  repository,
  cta,
  className,
  href,
  hoverable,
  sources,
}: SdkCard) => {
  if (!icon && !sources) throw Error("Missing SDK icon/icon sources");
  if (!isValidSdk(icon) && !sources) throw Error("Invalid SDK.");

  const Icon = sources ? null : getSdkIcon(icon);

  return (
    <Card
      hoverable={hoverable}
      className={clsx([className, styles.card])}
      href={href}
      img={
        <div className={utils["round-border"]}>
          {sources ? (
            <ThemedImage
              width="100%"
              height="100%"
              sources={{
                light: useBaseUrl(sources.light),
                dark: useBaseUrl(sources.dark),
              }}
            />
          ) : (
            <Icon />
          )}
        </div>
      }
      cta={cta}
      heading={heading}
    >
      <>
        <div className={clsx([utils.repository, styles.repository])}>
          <Package /> {repository}
        </div>
      </>
    </Card>
  );
};

SdkCard.TwoColumnLayout = Card.TwoColumnLayout;

export { SdkCard };
