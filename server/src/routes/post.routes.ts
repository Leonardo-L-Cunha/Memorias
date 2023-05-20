import { Router } from "express";
import { ensureUserIsAuth } from "../middleware/ensureUserIsAuth.middleware";
import { createPostController, readPostController } from "../controllers/post.controllers";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import { CreatePostSchema } from "../schema/post.schema";

const postRoutes:Router = Router()

postRoutes.post("",ensureUserIsAuth,ensureDataIsValid(CreatePostSchema),createPostController)
postRoutes.get("",readPostController)

export default postRoutes