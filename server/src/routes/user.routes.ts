import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import { CreateUserSchema } from "../schema/user.schema";

const userRoutes:Router = Router()

userRoutes.post("", ensureDataIsValid(CreateUserSchema),createUserController)

export default userRoutes