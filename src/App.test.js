import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test("that a logo appears", () => {
  render(<Header />);
  const logo = screen.getByAltText(/logo/);
  expect(logo).toBeInTheDocument();
});
