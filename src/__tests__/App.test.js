import '@testing-library/jest-dom';
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("changes to 'dark' mode when the button is clicked", () => {
  const { container } = render(<App />);
  const toggleButton = screen.getByRole("button", { name: /mode/i });
  fireEvent.click(toggleButton);
  expect(container.querySelector(".App.dark")).toBeInTheDocument();
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { container } = render(<App />);
  const toggleButton = screen.getByRole("button", { name: /mode/i });
  fireEvent.click(toggleButton); // to dark
  expect(container.querySelector(".App.dark")).toBeInTheDocument();
  fireEvent.click(toggleButton); // back to light
  expect(container.querySelector(".App.light")).toBeInTheDocument();
});
