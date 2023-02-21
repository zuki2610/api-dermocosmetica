const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const heroeRouter = require("./routes/HeroeRoutes");
require('dotenv').config();

const app = express();
 
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api/heroes", heroeRouter);
//conexion a la base de datos
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Base de datos conectada");
      }
    }
  );
//inicializar el servidor
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3001");
  console.log(process.env.PORT)
});
 
module.exports = app;
