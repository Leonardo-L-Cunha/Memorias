import { z } from "zod"
import { LoginSchema } from "../schema/login.schema"

type LoginTypeRequest = z.infer<typeof LoginSchema>

export {
    LoginTypeRequest
}