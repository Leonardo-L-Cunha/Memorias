import { z } from "zod"
import { ReturnUserSchema } from "./user.schema"

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const LoginCompleteSchema = z.object({
    user: ReturnUserSchema,
    token: z.string()
})

export {
    LoginSchema,
    LoginCompleteSchema
}