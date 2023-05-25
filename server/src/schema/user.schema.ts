import { z } from "zod"

const UserSchemaRequest = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    
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