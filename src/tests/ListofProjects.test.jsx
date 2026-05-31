import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders initial projects", () => {
  render(<App />);

  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.getByText("Project 2")).toBeInTheDocument();
  expect(screen.getByText("Project 3")).toBeInTheDocument();
});