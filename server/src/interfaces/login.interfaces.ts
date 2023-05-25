import { z } from "zod"
import { LoginCompleteSchema, LoginSchema } from "../schema/login.schema"
import { UserTypeReturn } from "./user.interfaces"

type LoginTypeRequest = z.infer<typeof LoginSchema>

type LoginComplete = z.infer<typeof LoginCompleteSchema>

export {
    LoginTypeRequest,
    LoginComplete
}