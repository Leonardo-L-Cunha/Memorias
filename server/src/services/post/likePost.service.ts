import { Repository } from "typeorm";
import { PostTypeRequest } from "../../interfaces/post.interfaces";
import Post from "../../entities/post.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../erros";
import { PostSchemaRequest, ReturnPostSchema } from "../../schema/post.schema";

const likePostService = async(postId:number):Promise<PostTypeRequest> =>{
    const postRepository:Repository<Post> = AppDataSource.getRepository(Post)

    const findPost:Post | null = await postRepository.findOneBy({id:postId})

    if(!findPost){
        throw new AppError("Post not found", 404)
    }

    const updatedPost = postRepository.create({
        ...findPost,
        likeCount:findPost.likeCount + 1
    })

    await postRepository.save(updatedPost)

    const returnPost = PostSchemaRequest.parse(updatedPost)

    return returnPost
}

export {
    likePostService
}