import express from "express";
import userController from "./controller/userController.js";
import tarefaController from "./controller/tarefaController.js";
//import middleware from "./middleware/mid.js";
import db from "./database/bancoNovo.js";

const app = express()

app.use(express.json())

userController(app, db)
tarefaController(app, db)

export default app



