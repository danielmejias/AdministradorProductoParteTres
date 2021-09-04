import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/pulse/bootstrap.min.css";

import "./App.css";

import ProductoForm from "./components/Productos/ProductoMain";
import ProductosLista from "./components/Productos/ProductosLista";
import ProductoDetalle from "./components/Productos/ProductoDetalle";
// import UserEdit from "./components/Users/UserEdit";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="container">
        <Route path="/" exact component={ProductoForm} /> <br />
        <Route path="/" exact component={ProductosLista} />
        <Route path="/edit/:id" exact component={ProductoDetalle} />
        {/* <Route path="/editar/:id" component={UserEdit} /> */}
      </div>
    </Router>
  );
}

export default App;
