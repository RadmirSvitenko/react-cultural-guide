import Authorization from "components/Authentication/Authorization/Authorization";
import {
  authSelectors,
  getUserAsync,
} from "components/Authentication/Authorization/AuthorizationSlice";
import RegistrationCompany from "components/Authentication/RegistrationCompany/RegistrationCompany";
import RegistrationUser from "components/Authentication/RegistrationUser/RegistrationUser";
import { getTokenFromCookies } from "cookies";
import Main from "page/MainPage/Main";
import { AuthProvider } from "providers/authProvider/AuthProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <AuthProvider>
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration-user" element={<RegistrationUser />} />
        <Route path="/registration-company" element={<RegistrationCompany />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
