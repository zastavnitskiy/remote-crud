import React, { useRef } from "react";
import { Layout } from "../components";
import { useAPI } from "../api";
import { useParams } from "react-router-dom";
import { Employee, NewEmployee, EmptyEmployee } from "../api/api";
import { EmployeeForm } from "../components/EmployeeForm/EmployeeForm";

export const New: React.SFC = () => {
  const { api } = useAPI();
  const employee = { ...EmptyEmployee };

  return (
    <Layout>
      <EmployeeForm employee={employee} api={api}></EmployeeForm>
    </Layout>
  );
};
