import http from "./httpService";

const apiEndPoint = "/api/products";

export const getProducts = async () => {
  return await http.get(apiEndPoint);
};

export const removeProduct = async (id) => {};
