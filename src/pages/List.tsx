import React from "react";
import { Layout } from "../components";
import { Link } from "react-router-dom";
import { useAPI } from "../api";

export const List: React.SFC = () => {
  const { employees } = useAPI();
  return (
    <Layout>
      {employees.map((employee) => {
        return <Link to={`/employees/${employee.id}`}>{employee.name}</Link>;
      })}
    </Layout>
  );
};
