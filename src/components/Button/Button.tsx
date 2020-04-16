import React from "react";
import styles from "./style.module.css";
import { classnames } from "../../helpers/classnames";

interface CustomProps {
  variant?: "primary" | "secondary";
  icon?: "human";
}

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.SFC<Props> = ({
  variant = "secondary",
  children,
  className,
  icon,
  ...props
}) => {
  const classes = classnames(
    className,
    styles.btn,
    variant === "primary" && styles.btnPrimary,
    variant === "secondary" && styles.btnSecondary
  );

  return (
    <button className={classes} {...props}>
      {icon === "human" ? <i className={styles.btnIconHuman}></i> : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
};
