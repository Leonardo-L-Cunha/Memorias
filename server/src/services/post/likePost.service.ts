import { Repository } from "typeorm";
import { PostTypeRequest } from "../../interfaces/post.interfaces";
import Post from "../../entities/post.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../erros";
import { PostSchemaRequest, ReturnPostSchema } from "../../schema/post.schema";

const likePostService = async(postId:number, userId: number):Promise<PostTypeRequest> =>{
    const postRepository:Repository<Post> = AppDataSource.getRepository(Post)

    const findPost:Post | null = await postRepository.findOneBy({id:postId})

    if(!findPost){
        throw new AppError("Post not found", 404)
    }

    const index = findPost.likes.findIndex((id) => id === String(userId))

    if(index === -1){
        findPost.likes.push(String(userId))
    } else{
        findPost.likes = findPost.likes.filter((id) => id !== String(userId))
    }

    const updatedPost = postRepository.create({
        ...findPost
    })

    await postRepository.save(updatedPost)

    const returnPost = PostSchemaRequest.parse(updatedPost)

    return returnPost
}

export {
    likePostService
}