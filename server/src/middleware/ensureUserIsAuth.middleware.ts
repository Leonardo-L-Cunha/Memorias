import {Request, Response , NextFunction} from "express"
import { AppError } from "../erros"
import jwt from "jsonwebtoken"
import "dotenv/config"
const ensureUserIsAuth = async(req:Request, res:Response, next:NextFunction):Promise<Response |void> =>{
    let token = req.headers.authorization

    if(!token){
        throw new AppError("Missing Bearer token", 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!,(erro, decoded:any) =>{
        if(erro){
            throw new AppError(erro.message,401)
        }

        res.locals.userId = parseInt(decoded.sub)

        return next()
    })
}

export {
    ensureUserIsAuth
}