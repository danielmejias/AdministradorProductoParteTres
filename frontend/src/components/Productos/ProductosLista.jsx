import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as productoServices from "./ProductosServices";
// import "materialize-css/dist/css/materialize.min.css";

const ProductosLista = () => {
  const [lista, setlista] = useState([]);
  const loadProductos = async () => {
    const res = await productoServices.getProductos();
    const elem = res.data.map(({ _id, title, description }) => (
      <div>
        <ul key={_id} className="collection with-header">
          <li>
            <span>
              <Link to={`/edit/${_id}`}>
                <span>{title} </span>
              </Link>
            </span>
            <span>
              <Link to={`edit/${_id}`}>
                <span>{description} </span>{" "}
              </Link>
            </span>
          </li>
        </ul>
      </div>
    ));
    setlista(elem);
  };

  useEffect(() => {
    loadProductos();
  }, []);

  return (
    <>
      <div>
        <h1>All Products:</h1>
      </div>
      <div>{lista}</div>
    </>
  );
};

export default ProductosLista;
