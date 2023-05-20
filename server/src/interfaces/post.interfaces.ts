import { z } from "zod"
import { CreatePostSchema, PostSchemaRequest, ReturnPostSchema } from "../schema/post.schema"

type PostTypeRequest = z.infer<typeof PostSchemaRequest>

type PostTypeCreate = z.infer<typeof CreatePostSchema>

type PostTypeReturn = z.infer<typeof ReturnPostSchema>


export {
    PostTypeRequest,
    PostTypeCreate,
    PostTypeReturn
}