import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Grouping Test-Cases
describe("Contactus page test-cases", () => {
  test("should load contactus component", () => {
    //Rendering
    render(<ContactUs />);

    //Quering
    const headingEl = screen.getByRole("heading");

    //Asserting
    expect(headingEl).toBeInTheDocument();
  });

  test("should load button in contactus component", () => {
    //Rendering
    render(<ContactUs />);

    //Quering
    const buttonEl = screen.getByRole("button");

    //Assering
    // Asserting
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl.textContent).toBe("Send Message");
  });

  test("should load input name inside contactus component", () => {
    //Rendering
    render(<ContactUs />);

    //Quering
    const inputName = screen.getByLabelText("Name");

    //Asserting
    expect(inputName).toBeInTheDocument();
    //expect(inputName).toHaveTextContent("Enter Name");
  });

  test("should load 4 input boxes on the contactus component", () => {
    //Rendering
    render(<ContactUs />);

    //Quering
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes.length);

    //Asserting
    expect(inputBoxes.length).toBe(4);
  });
});
