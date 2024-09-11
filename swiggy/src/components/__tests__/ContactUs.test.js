import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contactus component", () => {
  render(<ContactUs />);

  const headingEl = screen.getByRole("heading");

  expect(headingEl).toBeInTheDocument();
});
