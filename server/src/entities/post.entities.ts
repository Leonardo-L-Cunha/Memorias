import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn , ManyToOne} from 'typeorm'
import User from './user.entities'
@Entity('post')
class Post {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    creator: string

    @Column()
    title: string

    @Column()
    message: string
    
    @Column('simple-array')
    tags: string[]

    @Column()
    selectedFile:string

    @Column('simple-array',{default:[]})
    likes:string[]

    @CreateDateColumn({type: 'date'})
    createdAt:string

    @ManyToOne(() => User)
    user:User
}

export default Post