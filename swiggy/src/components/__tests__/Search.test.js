import React from "react";
import { act, render, screen } from "@testing-library/react";
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

  // Find the button by its text content
  const searchButton = screen.getByRole("button", { name: /search/i });
  expect(searchButton).toBeInTheDocument();
});
