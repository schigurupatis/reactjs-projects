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

const MockRestaurantCard = withDiscountLabel(RestaurantCard);

test("renders the discount label", () => {
  const { getByText } = render(<MockRestaurantCard resData={MOCK_DATA} />);
  const discountLabel = getByText(/Discount/i);
  expect(discountLabel).toBeInTheDocument();
});
