import { z } from "zod"

const PostSchemaRequest = z.object({
    id: z.number(),
    creator: z.string(),
    title: z.string(),
    message: z.string(),
    tags: z.string().array(),
    selectedFile: z.string(),
    likeCount: z.number(),
    createdAt: z.string()
})

const CreatePostSchema = PostSchemaRequest.omit({
    id: true,
    createdAt:true,
    likeCount:true
})

const UpdatedPostSchema = CreatePostSchema.partial()

const ReturnPostSchema = PostSchemaRequest.array()

export  {
    PostSchemaRequest,
    CreatePostSchema,
    ReturnPostSchema,
    UpdatedPostSchema
}