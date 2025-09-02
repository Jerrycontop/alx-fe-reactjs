// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  const sampleTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: true },
  ];

  it("renders the todo items", () => {
    render(<TodoList todos={sampleTodos} />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  it("marks completed todos correctly", () => {
    render(<TodoList todos={sampleTodos} />);
    const completedTodo = screen.getByText("Write Tests");
    expect(completedTodo).toHaveClass("completed"); // assuming your CSS adds this class
  });

  it("calls delete function when delete button is clicked", () => {
    const mockDelete = jest.fn();
    render(<TodoList todos={sampleTodos} onDelete={mockDelete} />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalled();
  });
});
