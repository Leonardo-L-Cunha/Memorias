import { z } from "zod"

const PostSchemaRequest = z.object({
    id: z.number(),
    title: z.string(),
    message: z.string(),
    tags: z.string().array(),
    selectedFile: z.string(),
    createdAt: z.string()
})

const CreatePostSchema = PostSchemaRequest.omit({
    id: true,
    createdAt:true
})

const ReturnPostSchema = PostSchemaRequest.array()

export  {
    PostSchemaRequest,
    CreatePostSchema,
    ReturnPostSchema
}