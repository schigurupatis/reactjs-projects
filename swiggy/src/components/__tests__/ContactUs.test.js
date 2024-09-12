import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contactus component", () => {
  render(<ContactUs />);

  const headingEl = screen.getByRole("heading");

  //Asserting
  expect(headingEl).toBeInTheDocument();
});

test("should load 2 input boxes on the contactus component", () => {
  render(<ContactUs />);

  //Quering
  const inputBoxes = screen.getAllByRole("textbox");

  //console.log(inputBoxes.length);

  //Asserting
  expect(inputBoxes.length).toBe(5);
});
