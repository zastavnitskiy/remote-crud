import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

test("renders", () => {
  const { getByText } = render(<App />);
  const header = getByText(/People/i);
  expect(header).toBeInTheDocument();
});

test("navigates to edit screen", () => {
  const { getAllByText, getByText } = render(<App />);
  const editBtns = getAllByText(/Edit/i);
  expect(editBtns[0]).toBeInTheDocument();

  fireEvent(
    editBtns[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const editTitle = getByText(/Edit employee/i);
  expect(editTitle).toBeInTheDocument();
});
