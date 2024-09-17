import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      }),
  })
);

test('should render button with text "Search"', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // Wait for the restaurant list to be rendered
  await waitFor(() => {
    expect(
      screen.getByText(/Top Restaurants Near to Your Location/i)
    ).toBeInTheDocument();
  });

  // Find the button by its text content
  const searchButton = await waitFor(() =>
    screen.getByRole("button", { name: /search/i })
  );
  expect(searchButton).toBeInTheDocument();
});
