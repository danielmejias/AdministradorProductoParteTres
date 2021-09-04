const { ModalsPluginWeb } = require("@capacitor/core");
const productosCtrl = {};
const Producto = require("../models/producto");

productosCtrl.createProducto = async (req, res) => {
  const { title, price, description } = req.body;
  const newProducto = new Producto({ title, price, description });
  const doc = await newProducto.save();
  if (!doc) res.status(404).json({ message: "Error creating Producto" });
  res.json("Producto created");
};
productosCtrl.getProductos = async (req, res) => {
  const productos = await Producto.find();
  if (!productos) res.status(404).json({ message: "Not found" });
  res.json(productos);
};
productosCtrl.getProducto = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (!producto) res.status(404).json({ message: "Not found" });
  res.json(producto);
};
productosCtrl.editProducto = async (req, res) => {
  const { title, price, description } = req.body;
  const doc = await Producto.findByIdAndUpdate(req.params.id, {
    title: title,
    price: price,
    description: description,
  });
  if (!doc) res.status(404).json({ message: "Error updating producto" });
  res.json({ message: "Producto Updated" });
};
productosCtrl.deleteProducto = async (req, res) => {
  const doc = await Producto.findByIdAndDelete(req.params.id);
  if (!doc) res.status(404).json({ message: "Error deleting producto" });
  res.json("Producto Deleted");
};
module.exports = productosCtrl;
