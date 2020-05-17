import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = "/login";
const tokenKey = "token";

// http.setJwt(getJwt());

export const login = async (username, password) => {
  const response = await http.post(apiEndPoint, { username, password });

  await SecureStore.setItemAsync(tokenKey, `Bearer ${response.data.token}`);

  http.setJwt(`Bearer ${response.data.token}`);

  return response;
};

export const loginWithJwt = (jwt) => {
  SecureStore.setItemAsync(tokenKey, jwt);
};

export async function getJwt() {
  try {
    return await SecureStore.getItemAsync(tokenKey);
  } catch (error) {
    return null;
  }
}

export const logout = async () => {
  return await SecureStore.deleteItemAsync(tokenKey);
};

export const getCurrentUser = async () => {
  try {
    const jwt = await SecureStore.getItemAsync(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};
