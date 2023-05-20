import { Router } from "express";
import { ensureUserIsAuth } from "../middleware/ensureUserIsAuth.middleware";
import { createPostController, readPostController, updatedPostController } from "../controllers/post.controllers";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import { CreatePostSchema, UpdatedPostSchema } from "../schema/post.schema";

const postRoutes:Router = Router()

postRoutes.get("",readPostController)
postRoutes.post("",ensureDataIsValid(CreatePostSchema),createPostController)
postRoutes.patch("/:id",ensureDataIsValid(UpdatedPostSchema),updatedPostController)

export default postRoutes