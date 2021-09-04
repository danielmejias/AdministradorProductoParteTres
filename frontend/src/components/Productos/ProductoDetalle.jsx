import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productoServices from "./ProductosServices";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { stringify } from "querystring";

const ProductoDetalle = () => {
  const [productoProps, setProductoProps] = useState([]);
  const { id } = useParams();

  const loadProducto = async () => {
    const res = await productoServices.getProducto(id);
    setProductoProps(res.data);
    if (res.status != 200) window.alert("Not found");
  };
  useEffect(() => {
    loadProducto();
  }, []);
  return (
    <div className="row">
      <h1>{productoProps.title}</h1>
      <h3>Price: {productoProps.price}</h3>
      <h3>Description: {productoProps.description}</h3>
    </div>
  );
};

export default ProductoDetalle;
