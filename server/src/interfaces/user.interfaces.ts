import { z } from "zod"
import { CreateUserSchema, UserSchemaRequest } from "../schema/user.schema"
import { ReturnUserSchema } from "../schema/user.schema"

type UserTypeRequest = z.infer<typeof UserSchemaRequest>

type UserTypeCreate = z.infer<typeof CreateUserSchema>

type UserTypeReturn = z.infer<typeof ReturnUserSchema>


export {
    UserTypeRequest,
    UserTypeCreate,
    UserTypeReturn
}