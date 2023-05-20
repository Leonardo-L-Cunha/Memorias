import { Repository } from "typeorm";
import { PostTypeRequest, PostTypeReturn, PostTypeUpdated } from "../../interfaces/post.interfaces";
import AppDataSource from "../../data-source";
import { AppError } from "../../erros";
import { PostSchemaRequest, ReturnPostSchema } from "../../schema/post.schema";
import Post from "../../entities/post.entities";


const updatedPostService = async(payload:PostTypeUpdated , postId:number):Promise<PostTypeRequest> =>{
    const postRepository:Repository<Post> = AppDataSource.getRepository(Post)

    const findPost = await postRepository.findOne({
        where:{
            id:postId
        }
    })

    if(!findPost){
        throw new AppError("post not found",404)
    }

    const updatedPost:Post = postRepository.create({
        ...findPost,
        ...payload
    })

    await postRepository.save(updatedPost)

    const returnPost = PostSchemaRequest.parse(updatedPost)
    
    return returnPost
}

export {
    updatedPostService
}