import express from "express";
import dotenv from "dotenv";

dotenv.config();

import home from "./routes/home";
import about from "./routes/about";
import usuario from "./routes/usuario";
import morgan from "morgan";

const port = process.env.PORT || 5555;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(home);
app.use(about);
app.use(usuario);

app.listen(port, () => {
  console.log(`Super Servidor levantado en el puerto ${port}`);
});
