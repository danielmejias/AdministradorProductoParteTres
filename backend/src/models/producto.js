const { Schema, model } = require("mongoose");

const productoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  }
);
module.exports = model("Producto", productoSchema);
