import Authorization from "components/Authentication/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayouts from "./layouts/MainLayouts";
import { theme } from "./theme";
// import { store } from "./store";
import Posts from "pages/posts/Posts";
import PostDetailsTabs from "pages/postDetails/PostDetailsTabs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<Authorization />} />
        </Routes>

        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" element={<Posts />} />
            <Route path="/post-details" element={<PostDetailsTabs />} />
          </Route>
        </Routes>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
