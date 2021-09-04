import React, { useState } from "react";
import * as productoServices from "./ProductosServices";

const ProductoForm = () => {
  const [producto, setProducto] = useState({ productoname: "", url: "" });

  const handleChange = (event) => {
    setProducto({ ...producto, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await productoServices.createProductos(producto);
    res.status != 200 ? window.alert("Error") : window.alert("created");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Product Manager</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  autoFocus
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoForm;
