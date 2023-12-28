import React, { PropsWithChildren, ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import { Card } from "@site/src/components/shared/Card";

import { QuestionCheckbox } from "./QuestionCheckbox";
import { AnswerButtons } from "./AnswerButtons";
import styles from "./QuestionCard.module.css";
import { Answer, AnswerType, State } from "./types";

interface Props extends PropsWithChildren {
  question: string;
  yesType?: AnswerType;
  noType?: AnswerType;
}

interface ContentProps extends PropsWithChildren {
  type: Answer;
}

export const Content = ({ children }: ContentProps) => {
  return <> {children} </>;
};

const filterContent = (children: ReactNode[], type: Answer) => children.filter((c) => (c as ReactElement<ContentProps>).props?.type === type);

const resolveState = (answer: Answer, yesType: AnswerType, noType: AnswerType): State => {
  if (answer === null) {
    return "empty";
  }
  if (answer === "na") {
    return "na";
  }
  if ((answer === "yes" && yesType === "right") || (answer === "no" && noType === "right")) {
    return "right";
  }
  return "wrong";
};
export const QuestionCard = ({ question, yesType = "right", noType = "wrong", children }: Props) => {
  const [answer, setAnswer] = useState<Answer>(null);

  const childrenArray = React.Children.toArray(children);
  const yesContent = filterContent(childrenArray, "yes");
  const noContent = filterContent(childrenArray, "no");
  const naContent = filterContent(childrenArray, "na");

  const state = resolveState(answer, yesType, noType);
  const key = `Question: ${question}`;

  useEffect(() => {
    const value = window.localStorage.getItem(key);
    if (["yes", "no", "na"].includes(value)) {
      setAnswer(value as Answer);
    }
  }, [question]);

  const updateAnswer = (value: Answer) => {
    setAnswer(value);
    window.localStorage.setItem(key, value);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.grid}>
        <div className={styles.icon}>
          <QuestionCheckbox state={state} />
        </div>
        <div className={styles.question}>{question}</div>
        <div className={styles["button-group"]}>
          <AnswerButtons state={state} value={answer} onChange={updateAnswer} />
        </div>
        <div className={styles.content}>
          {answer === "yes" && yesContent}
          {answer === "no" && noContent}
          {answer === "na" && naContent}
        </div>
      </div>
    </Card>
  );
};
