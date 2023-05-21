import { Repository } from "typeorm"
import Post from "../../entities/post.entities"
import AppDataSource from "../../data-source"
import { AppError } from "../../erros"

const deletePostService = async(postId:number):Promise<void> =>{
    const postRepository:Repository<Post> = AppDataSource.getRepository(Post)

    const findPost:Post | null= await postRepository.findOneBy({id:postId})

    if (!findPost){
        throw new AppError("Post not found", 404)
    }

    await postRepository.remove(findPost)
}

export {
    deletePostService
}