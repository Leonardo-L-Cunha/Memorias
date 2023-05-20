import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { UserTypeReturn } from "../../interfaces/user.interfaces";
import { UserTypeCreate } from "../../interfaces/user.interfaces";
import { AppError } from "../../erros";
import { ReturnUserSchema } from "../../schema/user.schema";


const createUserService  = async (payload:UserTypeCreate):Promise<UserTypeReturn> =>{
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const findUser:User | null = await userRepository.findOne({
        where:{
            email:payload.email
        }
    })

    if(findUser){
        throw new AppError('User already exist', 409)
    }

    const newUser:User = userRepository.create(payload)

    await userRepository.save(newUser)

    const user = ReturnUserSchema.parse(newUser)

    return user
}

export {
    createUserService
}