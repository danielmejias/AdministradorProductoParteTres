import axios from "axios";

const apiroot = "http://localhost:9999/";

export const getProductos = async () => {
  return await axios.get(`${apiroot}api/productos`);
};

export const createProductos = async (producto) => {
  return await axios.post(`${apiroot}api/productos`, producto);
};

export const getProducto = async (id) => {
  return await axios.get(`${apiroot}api/productos/${id}`);
};

export const editProducto = async (id, producto) => {
  return await axios.put(`${apiroot}api/productos/${id}`, producto);
};

export const deleteProducto = async (id) => {
  return await axios.delete(`${apiroot}api/productos/${id}`);
};
