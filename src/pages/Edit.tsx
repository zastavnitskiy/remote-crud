import React, { useRef } from "react";
import { Layout } from "../components";
import { useAPI } from "../api";
import { useParams } from "react-router-dom";
import { Employee } from "../api/api";
import { EmployeeForm } from "../components/EmployeeForm/EmployeeForm";

interface EditPageParams {
  employee_id: Employee["id"];
}

export const Edit: React.SFC = () => {
  const { employees, api } = useAPI();
  const params = useParams<EditPageParams>();
  const employee = employees.find(({ id }) => id === params.employee_id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <Layout>
      <EmployeeForm employee={employee} api={api}></EmployeeForm>
    </Layout>
  );
};
