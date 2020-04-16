import React from "react";
import styles from "./styles.module.css";

interface InputProps {
  label: React.ReactNode;
  placeholder: React.ReactNode;
  description: React.ReactNode;
}

type Props = InputProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.SFC<Props> = ({
  label,
  placeholder,
  description,
  value,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label>
        <span className={styles.label}>{label}</span>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>

      <small className={styles.description}>{description}</small>
    </div>
  );
};
