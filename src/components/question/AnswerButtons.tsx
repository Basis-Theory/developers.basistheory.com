import React from "react";
import clsx from "clsx";

import { Answer, State } from "./types";
import styles from "./AnswerButtons.module.css";

interface Props {
  onChange: (value: Answer) => unknown;
  state: State;
  value: Answer;
}

export const AnswerButtons = ({ state, value, onChange }: Props) => {
  return (
    <div className={styles.buttons}>
      <button className={clsx(value === "yes" && styles[state])} onClick={() => onChange("yes")}>
        Yes
      </button>
      <button className={clsx(value === "no" && styles[state])} onClick={() => onChange("no")}>
        No
      </button>
      <button className={clsx(value === "na" && styles[state])} onClick={() => onChange("na")} title="Not Applicable">
        N/A
      </button>
    </div>
  );
};
