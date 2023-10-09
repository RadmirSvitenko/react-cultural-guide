import Authorization from "components/Authentication/Authorization/Authorization";
import {
  authSelectors,
  getUserAsync,
} from "components/Authentication/Authorization/AuthorizationSlice";
import RegistrationCompany from "components/Authentication/Registration/RegistrationCompany/RegistrationCompany";
import RegistrationUser from "components/Authentication/Registration/RegistrationUser/RegistrationUser";
import { getTokenFromCookies } from "cookies";
import { AuthProvider } from "providers/authProvider/AuthProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Posts from "pages/posts/Posts";
import PostDetails from "pages/postDetails/PostDetails";
import { Provider } from "react-redux";
import store from "store";
import { theme } from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Profile from "pages/ProfilePage/Profile";

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
              <Route path="/authorization" element={<Authorization />} />
              <Route path="/registration-user" element={<RegistrationUser />} />
              <Route
                path="/registration-company"
                element={<RegistrationCompany />}
              />
              <Route element={<MainLayouts />}>
                <Route path="/" element={<Posts />} />
                <Route path="post/:id" element={<PostDetails />} />
                <Route path="/profile/" element={<Profile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
