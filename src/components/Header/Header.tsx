import React from "react";
import { User } from "../User";
import styles from "./style.module.css";

export const Header: React.SFC = () => {
  return (
    <header className={styles.header}>
      <User
        user={{
          name: "Julie Howard",
          role: "Admin",
          avatar: {
            square_small: "",
          },
        }}
      />
    </header>
  );
};
