import React from "react";
import styles from "./style.module.css";
import { classnames } from "../../helpers/classnames";

interface CustomProps {
  variant?: "primary" | "secondary";
}

type Props = CustomProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.SFC<Props> = ({
  variant = "secondary",
  children,
  className,
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
      {children}
    </button>
  );
};
