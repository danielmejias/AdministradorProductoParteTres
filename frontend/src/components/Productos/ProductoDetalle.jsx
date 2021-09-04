import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productoServices from "./ProductosServices";

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

  const [producto, setProducto] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const handleChange = (event) => {
    setProducto({ ...producto, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await productoServices.editProducto(id, producto);
    res.status != 200 ? window.alert("Error") : window.alert("Updated");
    window.location.reload();
  };

  const eliminarProducto = async (_id) => {
    const res = await productoServices.deleteProducto(_id);
    res.status != 200 ? window.alert("Error") : window.alert("Deleted");
    // window.location.reload();
    window.location.href = "/";
  };
  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={productoProps.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="number"
          name="precio"
          id="precio"
          defaultValue={productoProps.precio}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          name="description"
          id="description"
          defaultValue={productoProps.description}
          onChange={handleChange}
        ></input>
        <br />
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
        <div>
          <button
            onClick={async () => {
              await eliminarProducto(productoProps._id);
            }}
            className="btn btn-primary"
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductoDetalle;
