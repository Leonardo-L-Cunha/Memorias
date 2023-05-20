import { z } from "zod"

const UserSchemaRequest = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    avatar : z.string()
})

const CreateUserSchema = UserSchemaRequest.omit({
    id:true
})

const ReturnUserSchema = UserSchemaRequest.omit({
    password:true
})


export {
    UserSchemaRequest,
    CreateUserSchema,
    ReturnUserSchema
}