const mogoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mogoose.connect(config.DB, (err, res) => {
  if (err) {
    return console.log(`Error al conectar con base de datos ${err}`);
  }
  console.log("Conexion a la base de datos realizada con exito");

  app.listen(config.PORT, () => {
    console.log(`APU corriendo en el puerto ${config.PORT}`);
  });
});
mogoose.Promise = global.Promise;
