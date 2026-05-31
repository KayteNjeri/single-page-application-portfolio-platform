import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("adds a new project", async () => {
  render(<App />);

  const inputs = screen.getAllByRole("textbox");

  await userEvent.type(inputs[0], "A React Project");
  await userEvent.type(inputs[1], "This has been built with React");

  await userEvent.click(screen.getByText("Add"));

  expect(
    screen.getByText("A React Project")
  ).toBeInTheDocument();
});