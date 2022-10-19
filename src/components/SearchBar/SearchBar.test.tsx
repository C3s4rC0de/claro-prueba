import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./index";

const mock = jest.fn();

describe("SearchBar component tests", () => {
  it("Should call search handler when we type on searchbar", () => {
    render(<SearchBar searchHandler={mock} />);
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/buscar/i);

    userEvent.type(searchInput, "Test");

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(mock).toHaveBeenCalled();
    });
  });
});
