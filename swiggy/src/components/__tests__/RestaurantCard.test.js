import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantCardMockData.json";
import RestaurantCard, { withDiscountLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render RestarurantCard component with props data", () => {
  //Rendering
  render(<RestaurantCard resData={MOCK_DATA} />);

  //Quering
  const nameEl = screen.getByText("Pizza Hut");

  //Asserting
  expect(nameEl).toBeInTheDocument();
});

it("should render RestaurantCard with Discount label for a discounted restaurant", () => {
  //Rendering
  render(<RestaurantCard resData={MOCK_DATA} />);

  //Quering
  const nameEl = screen.getByText("Pizza Hut");

  //Asserting
  expect(nameEl).toBeInTheDocument();
});
