import http from "./httpService";

const apiEndPoint = "/api/products";

export const getProducts = async (page) => {
  return await http.get(`${apiEndPoint}?page=${page}`);
};

export const removeProduct = async (id) => {};
