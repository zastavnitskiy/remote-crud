import React, { useState } from "react";
import { Form, Input, Button } from "..";
import { Link, Redirect } from "react-router-dom";
import {
  Employee,
  NewEmployee,
  UpdateEmployeeDiff,
  API,
  EmptyEmployee,
} from "../../api/api";
import { countries } from "../../helpers/countries";

type EmployeeProps = keyof Employee;

interface EmployeeFormProps {
  employee: Partial<Employee>;
  api?: API;
}

function validate(employee: Partial<Employee>): boolean {
  return employee.name !== EmptyEmployee.name;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employee,
  api,
}) => {
  const [state, setState] = useState<Partial<Employee>>(employee);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (key: EmployeeProps, value: string | number) => {
    setState((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submit", canBeCreated);
    if (canBeCreated && api) {
      if ((state as Employee).id) {
        api.update(state as UpdateEmployeeDiff).then(() => {
          setRedirect(true);
        });
      } else {
        api.create(state as NewEmployee).then(() => {
          setRedirect(true);
        });
      }
    }
  };

  const canBeCreated = validate(state);

  if (redirect) {
    console.log("here");
    return <Redirect to="/employees" />;
  }

  return (
    <Form
      title={"Edit employee"}
      subtitle={"Edit the information of your employee"}
      actions={[
        <Link to="/employees">
          <Button>Cancel</Button>
        </Link>,
        <Button variant="primary" type="submit" disabled={!canBeCreated}>
          Save
        </Button>,
      ]}
      onSubmit={handleSubmit}
    >
      {state.id ? <input type="hidden" name="id" value={state.id} /> : null}
      <Input
        name="name"
        label="Name"
        placeholder="e.g. Jane Doe"
        description="First and last names"
        value={state.name}
        onChange={(e) => handleChange("name", e.target.value)}
      ></Input>

      <Input
        name="birth_date"
        label="Birthdate"
        placeholder="e.g. 17/02/1990"
        description="DD/MM/YYYY"
        value={state.birth_date}
        onChange={(e) => handleChange("birth_date", e.target.value)}
      ></Input>

      <Input
        name="job_title"
        label="Job title"
        placeholder="e.g. Product Manager"
        description="What is their role?"
        value={state.job_title}
        onChange={(e) => handleChange("job_title", e.target.value)}
      ></Input>

      <Input
        name="country_code"
        label="Country"
        placeholder=""
        description="Where are they based?"
        value={state.country_code}
        type="select"
        options={countries}
        onChange={(e) => handleChange("country_code", e.target.value)}
      ></Input>

      <Input
        name="salary"
        label="Salary"
        placeholder="e.g. 50000"
        description="Gross yearly salary"
        value={state.salary}
        onChange={(e) => handleChange("salary", e.target.value)}
      ></Input>
    </Form>
  );
};
