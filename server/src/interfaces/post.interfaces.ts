import { z } from "zod"
import { CreatePostSchema, PostSchemaRequest, ReturnPostSchema, UpdatedPostSchema } from "../schema/post.schema"
import { DeepPartial } from "typeorm"

type PostTypeRequest = z.infer<typeof PostSchemaRequest>

type PostTypeCreate = z.infer<typeof CreatePostSchema>

type PostTypeReturn = z.infer<typeof ReturnPostSchema>

type PostTypeUpdated = DeepPartial<typeof UpdatedPostSchema>

export {
    PostTypeRequest,
    PostTypeCreate,
    PostTypeReturn,
    PostTypeUpdated
}