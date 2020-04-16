import React from "react";
import { Layout } from "../../components";
import { useAPI } from "../../api";
import { EmptyEmployee } from "../../api/api";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";

export const New: React.SFC = () => {
  const { api } = useAPI();
  const employee = { ...EmptyEmployee };

  return (
    <Layout>
      <EmployeeForm employee={employee} api={api}></EmployeeForm>
    </Layout>
  );
};
