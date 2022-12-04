import React, { PropsWithChildren } from "react";

import styles from "./BlueprintCard.module.css";

import clsx from "clsx";
import { Card } from "../shared/Card";

interface BlueprintCard
  extends Pick<React.ComponentProps<typeof Card>, "img" | "heading" | "href"> {}

const BlueprintCard = ({
  img,
  heading,
  children,
  href,
}: PropsWithChildren<BlueprintCard>) => {
  return (
    <Card
      column
      className={clsx([styles.card])}
      img={img}
      href={href}
      heading={<Card.PrimaryHeader>{heading}</Card.PrimaryHeader>}
    >
      <>{children}</>
    </Card>
  );
};

export { BlueprintCard };
