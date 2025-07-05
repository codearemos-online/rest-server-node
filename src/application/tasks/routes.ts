import {Router} from 'express';
import { TaskController } from './controller';

export class TaskRoutes{
    static routes():Router{
        const router = Router();
        const taskController = new TaskController();
        router.get('/',taskController.getTasks);
        router.get('/:id',taskController.findTask);
        router.post('/',taskController.createTask);
        return router;
    }
}