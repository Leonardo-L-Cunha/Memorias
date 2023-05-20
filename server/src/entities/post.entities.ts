import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn , ManyToOne} from 'typeorm'
import User from './user.entities'
@Entity('post')
class Post {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    title: string

    @Column()
    message: string
    
    @Column('simple-array')
    tags: string[]

    @Column()
    selectedFile:string

    @Column({default:0})
    likeCount:number

    @CreateDateColumn({type: 'date'})
    createdAt:string

    @ManyToOne(() => User)
    creator:User
}

export default Post