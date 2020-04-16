import React from "react";
import styles from "./styles.module.css";

interface User {
  name: string;
  role: string;
  avatar: {
    square_small: string;
  };
}

interface Props {
  user: User;
}

export const User: React.SFC<Props> = ({ user }) => {
  return (
    <div className={styles.container}>
      <picture className={styles.avatar}>
        {/* <img
          className={styles.img}
          alt={user.name}
          src={user.avatar.square_small}
        /> */}
      </picture>
      <div className={styles.info}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.role}>{user.role}</div>
      </div>
    </div>
  );
};
