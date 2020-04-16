import React from "react";
import { Header } from "../Header/Header";
import styles from "./style.module.css";

interface CenteredProps {
  className?: string;
}

const Centered: React.SFC<CenteredProps> = ({ children, className }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const Layout: React.SFC = ({ children }) => {
  return (
    <>
      <Centered className={styles.header}>
        <Header />
      </Centered>
      <Centered className={styles.main}>{children}</Centered>
    </>
  );
};
