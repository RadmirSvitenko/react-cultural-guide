import Authorization from "components/Authentication/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayouts from "./layouts/MainLayouts";
import Posts from "pages/posts/Posts";
import PostDetails from "pages/postDetails/PostDetails";
import { Provider } from "react-redux";
import store from "store";
import { theme } from "theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/authorization" element={<Authorization />} />
            </Routes>

            <Routes>
              <Route element={<MainLayouts />}>
                <Route path="/" element={<Posts />} />
                <Route path="/post-details" element={<PostDetails />} />
              </Route>
            </Routes>
            <Routes></Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
