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

// export const editUser = async (id, user) => {
//   return await axios.put(`${apiroot}api/users/${id}`, user);
// };

// export const deleteUser = async (id, user) => {
//   return await axios.delete(`${apiroot}api/users/${id}`);
// };
