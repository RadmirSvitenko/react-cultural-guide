import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getTokenFromCookies } from "cookies";
import { removeTokensFromCookies } from "cookies";
import {
  authSelectors,
  getUserAsync,
  logout,
} from "components/Authentication/Authorization/AuthorizationSlice";

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const user = useSelector(authSelectors.user);

  const logoutActions = () => {
    removeTokensFromCookies();
    logout();
  };

  const value = useMemo(() => ({ user, logout: logoutActions }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthStatus() {
  const auth = useAuth();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user?.full_name}! <button>Sign out</button>
    </p>
  );
}

export function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  const token = getTokenFromCookies();
  const dispatch = useDispatch();

  const signInWithToken = async () => {
    await dispatch(getUserAsync());
  };

  if (!auth.user && token) {
    signInWithToken();
  } else if (!auth.user && !token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}
