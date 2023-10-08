import { setTokenToCookies } from "cookies";
import API from "requester";

export async function companyRegister(data) {
  const response = await API.post("/signup/company/", data);
  setTokenToCookies(response.data.token);
  return response.data;
}

export async function userRegister(data) {
  const response = await API.post("/signup/", data);
  setTokenToCookies(response.data.token);
  return response.data;
}
