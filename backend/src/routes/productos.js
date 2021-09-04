const { Router } = require("express");
const router = Router();

const {
  getProductos,
  createProducto,
  deleteProducto,
  getProducto,
  editProducto,
} = require("../controllers/producto.controller");

router.route("/").get(getProductos).post(createProducto);
router.route("/:id").get(getProducto).delete(deleteProducto).put(editProducto);
module.exports = router;
