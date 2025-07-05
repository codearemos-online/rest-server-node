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

    deleteTask(req:Request,res:Response){
        const {id} = req.params;
        const task = tasks.find((task)=>task.id === parseInt(id));
        if(!task){
            res.status(404).json({message:'Task not found'});
            return;
        }
        tasks.splice(tasks.indexOf(task),1);
        res.status(204).send("Task deleted successfully");
    }
}