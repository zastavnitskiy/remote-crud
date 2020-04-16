import React from "react";
import styles from "./style.module.css";

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions: ActionGroupProps["actions"];
  onSubmit: React.FormHTMLAttributes<HTMLFormElement>["onSubmit"];
}

interface ActionGroupProps {
  actions: React.ReactNode[];
}

const ActionGroup: React.SFC<ActionGroupProps> = ({ actions }) => {
  return (
    <>
      {actions.map((actionNode, index) => (
        <div key={`action-node-${index}`} className={styles.action}>
          {actionNode}
        </div>
      ))}
    </>
  );
};

export const Form: React.SFC<Props> = ({
  title,
  subtitle,
  children,
  actions,
  onSubmit,
}) => {
  return (
    <form
      className={styles.container}
      onSubmit={onSubmit}
      action="/employees"
      method="post"
    >
      <hgroup className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </hgroup>
      <section className={styles.inputs}>{children}</section>
      <section className={styles.actions}>
        <ActionGroup actions={actions} />
      </section>
    </form>
  );
};
