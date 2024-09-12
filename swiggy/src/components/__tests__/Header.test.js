import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Header Component button element", () => {
  //Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Quering
  const buttonEl = screen.getByRole("button");
  // const loginBtn = screen.getByText("button");

  //Asserting
  expect(buttonEl).toBeInTheDocument();
});

test("should render Header Component with a Cart items 0", () => {
  //Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Quering
  const cartItems1 = screen.getByText("Cart - (0 Items)");
  // const loginBtn = screen.getByText("button");

  //Asserting
  expect(cartItems1).toBeInTheDocument();
});

test("should render Header Component with a Cart item", () => {
  //Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Quering
  const cartItems = screen.getByText(/Cart/);
  // const loginBtn = screen.getByText("button");

  //Asserting
  expect(cartItems).toBeInTheDocument();
});

test("should change Login button to Logout on click", () => {
  //Rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Quering
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Asserting
  expect(logoutButton).toBeInTheDocument();
});
