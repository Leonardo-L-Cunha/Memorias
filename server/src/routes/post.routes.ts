import { Router } from "express";
import { ensureUserIsAuth } from "../middleware/ensureUserIsAuth.middleware";
import { createPostController, deletePostController, likePostController, readPostController, updatedPostController } from "../controllers/post.controllers";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import { CreatePostSchema, UpdatedPostSchema } from "../schema/post.schema";

const postRoutes:Router = Router()

postRoutes.get("",readPostController)
postRoutes.post("",ensureUserIsAuth,ensureDataIsValid(CreatePostSchema),createPostController)
postRoutes.patch("/:id",ensureUserIsAuth,ensureDataIsValid(UpdatedPostSchema),updatedPostController)
postRoutes.patch("/:id/likePost",ensureUserIsAuth,likePostController)
postRoutes.delete("/:id",ensureUserIsAuth,deletePostController)

export default postRoutes