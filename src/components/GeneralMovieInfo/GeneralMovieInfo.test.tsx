import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { movieMock } from "../Movie/Movie.test";
import GeneralMovieInfo from "./index";

describe("GeneralMovieInfo component tests", () => {
  it("Should render the movie info passed in props", () => {
    render(<GeneralMovieInfo movie={movieMock} />, { wrapper: BrowserRouter });

    const movieOriginalTitle = screen.getByText("Riddick");
    const movieDuration: HTMLInputElement = screen.getByText("01:58:45");
    const year: HTMLInputElement = screen.getByText("2013");
    expect(movieOriginalTitle).toBeInTheDocument();
    expect(movieDuration).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });
});
