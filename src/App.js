import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayouts from "./layouts/MainLayouts";
import { theme } from "./theme";
// import { store } from "./store";
import Posts from "pages/posts/Posts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" element={<Posts />} />
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
