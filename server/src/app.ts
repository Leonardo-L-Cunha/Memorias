import express,{ Application } from "express";
import "reflect-metadata"
import "express-async-errors"
import cors from  "cors"
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import { handleErros } from "./erros";
import loginRoutes from "./routes/login.routes";

const app:Application = express()
app.use(express.json())

app.use(cors())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/post", postRoutes)

app.use(handleErros)

export default app