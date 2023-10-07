import Authorization from "components/Authentication/Authorization/Authorization";
import {
  authSelectors,
  getUserAsync,
} from "components/Authentication/Authorization/AuthorizationSlice";
import RegistrationCompany from "components/Authentication/RegistrationCompany/RegistrationCompany";
import RegistrationUser from "components/Authentication/RegistrationUser/RegistrationUser";
import { getTokenFromCookies } from "cookies";
import { AuthProvider } from "providers/authProvider/AuthProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayouts from "./layouts/MainLayouts";
import Posts from "pages/posts/Posts";
import PostDetails from "pages/postDetails/PostDetails";
import { Provider } from "react-redux";
import store from "store";
import { theme } from "theme";
import { CssBaseline } from "@mui/material";

function App() {
  const user = useSelector(authSelectors.user);
  const token = getTokenFromCookies();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && token) {
      dispatch(getUserAsync());
    }
  }, [user, token, dispatch]);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <Routes>
              <Route element={<MainLayouts />}>
                <Route path="/" element={<Posts />} />
                <Route path="/:id" element={<PostDetails />} />
              </Route>
              <Route path="/authorization" element={<Authorization />} />
              <Route path="/registration-user" element={<RegistrationUser />} />
              <Route
                path="/registration-company"
                element={<RegistrationCompany />}
              />
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
      {/* 
      <AuthProvider>
        <Routes>
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/registration-user" element={<RegistrationUser />} />
          <Route
            path="/registration-company"
            element={<RegistrationCompany />}
          />
        </Routes>
      </AuthProvider> */}
    </>
  );
}

export default App;
