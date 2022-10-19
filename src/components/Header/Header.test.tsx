import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";

describe("Header component tests", () => {
  it("Should render logo image", () => {
    render(<Header />, { wrapper: BrowserRouter });

    const searchInput: HTMLInputElement =
      screen.getByAltText("logo clarovideo");

    expect(searchInput).toBeInTheDocument();
  });
});
