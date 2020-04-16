import React from "react";
import { Layout } from "../../components";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { useAPI } from "../../api";
import { EmptyEmployee } from "../../api/api";

export const New: React.SFC = () => {
  const { api } = useAPI();
  const employee = { ...EmptyEmployee };

  return (
    <Layout>
      <EmployeeForm employee={employee} api={api}></EmployeeForm>
    </Layout>
  );
};
