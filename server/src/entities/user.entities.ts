import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import Post from "./post.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column({unique:true})
    email:string

    @Column()
    password:string

    @OneToMany(()=> Post, post => post.user)
    post:Post[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}

export default User