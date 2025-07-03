import { Request, Response } from "express";

const tasks = [
    {
        id:1,
        message:'read a book'
    },
    {
        id:2,
        message:'clean the room'
    }
]


export class TaskController {

   
    getTasks(req:Request,res:Response){
    res.json(tasks); 
    }
}