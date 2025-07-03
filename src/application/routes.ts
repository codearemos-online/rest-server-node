import { Request, Response, Router } from "express";
import { TaskRoutes } from "./tasks/routes";

export class AppRouter {
    static routes():Router{
        const router = Router();
        router.use('/api/tasks',TaskRoutes.routes())
        return router;
    }
}