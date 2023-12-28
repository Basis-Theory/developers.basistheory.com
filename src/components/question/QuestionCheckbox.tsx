import React from "react";

import Empty from "@site/static/img/question/empty.svg";
import Check from "@site/static/img/question/check.svg";
import Close from "@site/static/img/question/close.svg";
import Block from "@site/static/img/question/block.svg";

import styles from "./QuestionCheckbox.module.css";
import clsx from "clsx";

interface Props {
  state: 'empty' | 'right' | 'wrong' | 'na'
}

export const QuestionCheckbox = ({ state }: Props) => {
  return <div className={clsx(styles.checkbox, styles[state])}>
    {state === "empty" && <Empty />}
    {state === "right" && <Check />}
    {state === "wrong" && <Close />}
    {state === "na" && <Block />}
  </div>

}
