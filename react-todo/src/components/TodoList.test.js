// src/components/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders Todo List heading", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Enter a todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("removes a todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Enter a todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Learn Testing" } });
  fireEvent.click(button);

  const removeBtn = screen.getByText(/Remove/i);
  fireEvent.click(removeBtn);

  expect(screen.queryByText("Learn Testing")).not.toBeInTheDocument();
});
