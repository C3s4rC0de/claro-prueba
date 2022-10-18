import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Home from "../pages/Home";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Header>
            <Home />
          </Header>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <Header>
            <Movie />
          </Header>
        }
      />
    </Routes>
  </BrowserRouter>
);
export default AppRouter;
