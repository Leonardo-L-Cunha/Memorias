import { Request, Response } from "express";
import { PostTypeCreate, PostTypeReturn, PostTypeUpdated } from "../interfaces/post.interfaces";
import { createPostService } from "../services/post/createPost.service";
import { readPostService } from "../services/post/readPost.service";
import { NumericType } from "typeorm";
import { updatedPostService } from "../services/post/updatedPost.service";


const createPostController = async(req:Request, res:Response):Promise<Response> =>{
    const data:PostTypeCreate = req.body
    const userId:number = res.locals.userId

    const newPost = await createPostService(data,userId)

    return res.status(201).json(newPost)
}

const readPostController = async(req:Request, res:Response):Promise<Response> =>{
    const posts:PostTypeReturn = await readPostService()
    
    return res.status(200).json(posts)
}

const updatedPostController = async(req:Request, res:Response):Promise<Response> =>{
    const postId:number = parseInt(req.params.id)
    const data:PostTypeUpdated = req.body

    const updatedPost = await updatedPostService(data,postId)

    return res.status(200).json(updatedPost)
}

export {
    createPostController,
    readPostController,
    updatedPostController	
}