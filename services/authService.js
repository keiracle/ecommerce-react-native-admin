import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = "/login";
const tokenKey = "token";

http.setJwt(getJwtWithPrefix());

export async function getJwtWithPrefix() {
  try {
    const jwt = await SecureStore.getItemAsync(tokenKey);
    return `Bearer ${jwt}`;
  } catch (error) {
    return null;
  }
}

export const login = async (username, password) => {
  const { data: jwt } = await http.post(apiEndPoint, { username, password });
  //   SecureStore.setItemAsync(tokenKey, jwt);
  console.log(jwt);
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

export const logout = () => {
  SecureStore.deleteItemAsync(tokenKey);
};

export const getCurrentUser = async () => {
  try {
    const jwt = await SecureStore.getItemAsync(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};
