import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

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
