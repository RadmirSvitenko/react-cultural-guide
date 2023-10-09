import { setRefreshTokenToCookies } from "cookies";
import { setTokenToCookies } from "cookies";
import API from "requester";
export async function login(data) {
  const response = await API.post("/login/", data);
  setTokenToCookies(response.data.access);
  setRefreshTokenToCookies(response.data.refresh);

  return response.data;
}

export async function getUser() {
  try {
    const response = await API.get("/users/");
    return response.data;
  } catch (error) {
    console.log("error: ", error);
  }
}
