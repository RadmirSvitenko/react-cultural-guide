import { COOKIE_KEYS } from "constants";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const { TOKEN, REFRESH } = COOKIE_KEYS;

export function getTokenFromCookies() {
  return cookies.get(TOKEN);
}

export function setTokenToCookies(token) {
  cookies.set(TOKEN, token, {
    path: "/",
    sameSite: true,
  });
}

export function getRefreshTokenFromCookies() {
  return cookies.get(REFRESH);
}

export function setRefreshTokenToCookies(token) {
  cookies.set(REFRESH, token, {
    path: "/",
    sameSite: true,
    // secure: true,
  });
}

export function removeTokensFromCookies() {
  cookies.remove(TOKEN, { path: "/" });
  cookies.remove(REFRESH, { path: "/" });
}
