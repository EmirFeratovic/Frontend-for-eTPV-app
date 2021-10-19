import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "./LoginPage";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("renders login page", () => {
  render(<LoginPage />);
  const text = screen.getByText("Download eTPV desktop/javafx app");
  expect(text).toBeInTheDocument();
});

test("renders learn react link", async () => {
  renderWithRouter(<App />);
  fireEvent.change(screen.getByLabelText("Email Address"), {
    target: { value: "bob.fellow@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "123123123" },
  });
  fireEvent.click(screen.getByRole("button", { type: "submit" }));
  await screen.findByText("Ovdje dolazi glavna stranica");
});
