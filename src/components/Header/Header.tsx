import React from "react";
import { User } from "../";
import styles from "./styles.module.css";

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
