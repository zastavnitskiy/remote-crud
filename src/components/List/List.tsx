import React from "react";
import { Button, Salary, Country } from "../";
import { Employee } from "../../api/api";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { classnames } from "../../helpers/classnames";

interface Props {
  employees: Employee[];
}

export const List: React.SFC<Props> = ({ employees }) => {
  return (
    <>
      <div className={classnames(styles.row, styles.headerRow)}>
        <div className={classnames(styles.column, styles.columnName)}>
          Employee
        </div>
        <div className={classnames(styles.column, styles.columnJobTitle)}>
          Job Title
        </div>
        <div className={classnames(styles.column, styles.columnCountry)}>
          Country
        </div>
        <div className={classnames(styles.column, styles.columnSalary)}>
          Salary
        </div>
        <div className={classnames(styles.column, styles.columnActions)}></div>
      </div>
      <ol className={styles.list}>
        {employees.map((employee) => {
          return (
            <li className={classnames(styles.row, styles.cardRow)}>
              <div className={classnames(styles.column, styles.columnName)}>
                <h3 className={styles.name}>{employee.name}</h3>
                <div className={styles.birthDate}>{employee.birth_date}</div>
              </div>

              <div className={classnames(styles.column, styles.columnJobTitle)}>
                {employee.job_title}
              </div>
              <Country
                className={classnames(styles.column, styles.columnCountry)}
                countryCode={employee.country_code}
              />
              <Salary
                className={classnames(styles.column, styles.columnSalary)}
                salary={employee.salary}
              />
              <div className={classnames(styles.column, styles.Actions)}>
                <Link to={`/employees/${employee.id}`}>
                  <Button>Edit</Button>
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};
