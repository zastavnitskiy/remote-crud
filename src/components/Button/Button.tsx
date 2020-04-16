import React from "react";
import styles from "./styles.module.css";
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
  disabled,
  type,
  ...props
}) => {
  const classes = classnames(
    className,
    styles.btn,
    variant === "primary" && styles.btnPrimary,
    variant === "secondary" && styles.btnSecondary,
    disabled && styles.btnDisabled
  );

  return (
    <button
      className={classes}
      {...props}
      disabled={disabled}
      type={type || "button"}
    >
      {icon === "human" ? <i className={styles.btnIconHuman}></i> : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
};
