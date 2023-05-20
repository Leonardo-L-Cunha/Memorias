import {Request, Response} from 'express'
import { createUserService } from '../services/users/createUser.service'
import { UserTypeCreate } from '../interfaces/user.interfaces'

const createUserController = async(req:Request, res:Response):Promise<Response> =>{
    const data:UserTypeCreate  = req.body

    const newUser =  await createUserService(data)

    return res.status(201).json(newUser)
}

export {
    createUserController
}