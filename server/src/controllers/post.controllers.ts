import { Request, Response } from "express";
import { PostTypeCreate, PostTypeReturn } from "../interfaces/post.interfaces";
import { createPostService } from "../services/post/createPost.service";
import { readPostService } from "../services/post/readPost.service";


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

export {
    createPostController,
    readPostController
}