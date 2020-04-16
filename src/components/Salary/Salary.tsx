import React from "react";
import { Employee } from "../../api/api";
import { classnames } from "../../helpers/classnames";
import styles from "./styles.module.css";

interface Props {
  className: string;
  salary: Employee["salary"];
}

export const Salary: React.SFC<Props> = ({ className = "", salary }) => {
  const number = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(salary);

  const currency = "USD";

  return (
    <div className={classnames(className, styles.container)}>
      <span>
        {number}&nbsp;{currency}
      </span>
      &nbsp;
      <span className={styles.salaryType}>per year</span>
    </div>
  );
};
