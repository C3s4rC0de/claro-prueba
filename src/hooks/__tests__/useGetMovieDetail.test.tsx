import { act, renderHook } from "@testing-library/react-hooks";
import useGetMovieDetail from "../useGetMovieDetail";

describe("useGetMovieDetail hook tests", () => {
  it("We get attributes from hook in the initial state", () => {
    const { result } = renderHook(() => useGetMovieDetail());

    expect(result.current.loading).toBe(false);
    expect(result.current.movie).toBe(null);
  });

  it("We get the movie details", async () => {
    const { result } = renderHook(() => useGetMovieDetail());

    await act(async () => {
      await result.current.getMovie("966926");
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.movie?.title).toBe("Riddick");
  });
});
