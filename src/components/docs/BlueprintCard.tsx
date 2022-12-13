import React, { PropsWithChildren } from "react";

import styles from "./BlueprintCard.module.css";

import clsx from "clsx";
import { Card } from "../shared/Card";

interface BlueprintCard
  extends Pick<React.ComponentProps<typeof Card>, "img" | "heading"> {}

const BlueprintCard = ({
  img,
  heading,
  children,
}: PropsWithChildren<BlueprintCard>) => {
  return (
    <Card
      className={clsx([styles.card])}
      img={img}
      heading={<Card.PrimaryHeader>{heading}</Card.PrimaryHeader>}
      hoverable={false}
    >
      <>{children}</>
    </Card>
  );
};

export { BlueprintCard };
