import React from "react";
import styles from "./styles.module.css";
import { classnames } from "../../helpers/classnames";

interface InputProps {
  label: React.ReactNode;
  placeholder: React.ReactNode;
  description: React.ReactNode;
  type?: "text" | "select";
  options?: {
    [key: string]: string;
  };
}

type Props = InputProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.SFC<Props> = ({
  label,
  placeholder,
  description,
  value,
  type = "text",
  options = {},
  onChange,
}) => {
  const element =
    type === "text" ? (
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <select
        className={classnames(styles.input, styles.select)}
        placeholder={placeholder}
        value={value}
        onChange={
          onChange as React.InputHTMLAttributes<HTMLSelectElement>["onChange"]
        }
      >
        {Object.keys(options).map((country) => (
          <option key={country} value={country}>
            {options[country]}
          </option>
        ))}
      </select>
    );

  return (
    <div className={styles.container}>
      <label>
        <span className={styles.label}>{label}</span>
        {element}
      </label>

      <small className={styles.description}>{description}</small>
    </div>
  );
};
