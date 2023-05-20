import { Repository } from "typeorm";
import { PostTypeCreate } from "../../interfaces/post.interfaces";
import { PostTypeRequest } from "../../interfaces/post.interfaces";
import Post from "../../entities/post.entities";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../erros";
import { PostSchemaRequest } from "../../schema/post.schema";

const createPostService = async(payload:PostTypeCreate,userId:number):Promise<PostTypeRequest>=>{
    const postRepository:Repository<Post>  = AppDataSource.getRepository(Post) 
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const creator = await userRepository.findOneBy({
        id:userId
    })

    if(!creator){
        throw new AppError("User not found", 404)
    }

    const post:Post = postRepository.create({
        ...payload,
        creator
    })

    await postRepository.save(post)

    return PostSchemaRequest.parse(post)
}

export {
    createPostService
}