import React from "react";
import { Layout, Button } from "../../components";
import { List } from "./components/List/List";
import { Link } from "react-router-dom";
import { useAPI } from "../../api";
import styles from "./styles.module.css";

const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const View: React.SFC = () => {
  const { employees } = useAPI();
  return (
    <Layout>
      <header className={styles.header}>
        <hgroup className={styles.titleGroup}>
          <h1 className={styles.title}>People</h1>
          <span className={styles.subtitle}>
            {pluralize(employees.length, "employee")}
          </span>
        </hgroup>
        <nav className={styles.actions}>
          <Link to="/employees/new">
            <Button variant="primary" icon="human">
              Add Employee
            </Button>
          </Link>
        </nav>
      </header>
      <List employees={employees} />
    </Layout>
  );
};
