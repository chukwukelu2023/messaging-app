import { User } from "../models/user"
import { hashedPassword } from "../utility/hash"
import { IUser } from "../utility/interface"

/**
 * GET ALL USERS
 */

export const getAllUsers = async ()=>{
    return await User.findAll({attributes:['id','firstname','lastname','email','gender','usertype']})
}

/**
 * GET USER BY ID
 */
export const getUserById = async (id:number) =>{
    return await User.findByPk(id)
}

/**
 * CREATE USER
 */
export const saveUser = async (body: IUser) =>{
    body.password = await hashedPassword(body.password)
    return await User.create(body)
}