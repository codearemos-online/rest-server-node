import { Request, Response, RequestHandler } from "express";

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

   
    getTasks: RequestHandler = (req:Request,res:Response) => {
    res.json(tasks); 
    }

    findTask: RequestHandler = (req:Request,res:Response) => {
        const {id} = req.params;
        const task = tasks.find((task)=>task.id === parseInt(id));
        if(!task){
            res.status(404).json({message:'Task not found'});
            return;
        }
        res.json(task);
    }

}