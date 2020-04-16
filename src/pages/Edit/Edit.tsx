import React from "react";
import { useParams, Link } from "react-router-dom";
import { Layout, Button } from "../../components";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { useAPI } from "../../api";
import { Employee } from "../../api/api";

interface EditPageParams {
  employee_id: Employee["id"];
}

export const Edit: React.SFC = () => {
  const { employees, api } = useAPI();
  const params = useParams<EditPageParams>();
  const employee = employees.find(({ id }) => id === params.employee_id);

  if (!employee) {
    return (
      <Layout>
        <h3>Employee not found</h3>

        <Link to="/employees">
          <Button variant="primary">View Employees</Button>
        </Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <EmployeeForm employee={employee} api={api}></EmployeeForm>
    </Layout>
  );
};
