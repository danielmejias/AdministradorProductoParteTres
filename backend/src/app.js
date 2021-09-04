const express = require("express");
const cors = require("cors");
const app = express();
module.exports = app;

//settings
app.set("port", process.env.PORT || 6000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/productos", require("./routes/productos"));

module.exports = app;
