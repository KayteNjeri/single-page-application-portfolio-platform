import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the application title", () => {
  render(<App />);

  const heading = screen.getByText(
    "Personal Project Showcase App"
  );

  expect(heading).toBeInTheDocument();
});