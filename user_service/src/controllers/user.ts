import {Request,Response} from 'express';
import { getAllUsers, getUserById, saveUser } from '../services/user';

export const createUser = async(req:Request, res:Response) =>{
    try {
       const user = await saveUser(req.body)
       res.status(201).send(user)
       return
    } catch (error) {
        res.send(error)
        return
    }
}

export const getUsers = async(_req:Request, res:Response) => {
    try {
        const users = await getAllUsers()
        res.status(200).send(users)
        return
    } catch (error) {
        res.send(error)
        return
    }
}

// export const getCurrentUser = async(req:Request,res:Response)=>{
//     try {
//         const id = req.user
//         const user = await getUserById(+id)
//        return res.status(200).send(user)
//     } catch (error) {
//         return res.send(error)
//     }

// }

export const getUser =async (req:Request, res:Response) => {
    
    try {
        const id = req.params.id
        const user = await getUserById(+id)
        if(!user){
            res.status(404).send({message:"User Does not Exist"})
            return
        }
        // res.render('user',{users:user})
       res.status(200).send(user)
       return
    } catch (error) {
        res.send(error)
        return
    }
}