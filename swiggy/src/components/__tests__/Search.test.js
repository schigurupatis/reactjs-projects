import { render, act, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the global fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render the body component with search button", async () => {
  // Rendering the Body component
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Output the DOM to see what is being rendered
  screen.debug();

  // Try to find the button using a function matcher
  const searchBtn = await waitFor(() =>
    screen.getByText(
      (content, element) =>
        element.tagName.toLowerCase() === "button" && content.includes("Search")
    )
  );

  // Assert that the button is present in the document
  expect(searchBtn).toBeInTheDocument();
});
