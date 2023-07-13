import { Repository } from "typeorm";
import { PostTypeReturn } from "../../interfaces/post.interfaces";
import Post from "../../entities/post.entities";
import AppDataSource from "../../data-source";
import { ReturnPostSchema } from "../../schema/post.schema";

const readPostService = async():Promise<PostTypeReturn> =>{
    const postRepository:Repository<Post> = AppDataSource.getRepository(Post)

    const post:Post[] = await postRepository.find(
        {
            relations:{
                user: true
            }
        }
    )

    

    return post
    
}

export {
    readPostService
}