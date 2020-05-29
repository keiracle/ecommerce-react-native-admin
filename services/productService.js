import http from "./httpService";

const apiEndPoint = "/api/products";

export const getProducts = async (page) => {
  return await http.get(`${apiEndPoint}?page=${page}`);
};

export const saveProduct = async (product) => {
  const body = { ...product };

  if (product.id) {
    return http.put(`${apiEndPoint}/${product.id}`, body);
  }

  return http.post(apiEndPoint, body);
};

export const removeProduct = async (id) => {};
