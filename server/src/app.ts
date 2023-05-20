import express,{ Application } from "express";
import "reflect-metadata"
import "express-async-errors"
import cors from  "cors"
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import { handleErros } from "./erros";
import loginRoutes from "./routes/login.routes";
import bodyParser from "body-parser";

const app:Application = express()


app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use("/post", postRoutes)
app.use("/users", userRoutes)
app.use("/login", loginRoutes)

app.use(handleErros)

export default app