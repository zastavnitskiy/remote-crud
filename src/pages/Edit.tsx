import React from "react";
import { useAPI } from "../api";
import { useParams } from "react-router-dom";
import { Employee } from "../api/api";

interface EditPageParams {
  employee_id: Employee["id"];
}

export const Edit: React.SFC = () => {
  const { employees } = useAPI();
  const params = useParams<EditPageParams>();

  const employee = employees.find(({ id }) => id === params.employee_id);

  return <div>Edit page {employee && employee.name}</div>;
};
