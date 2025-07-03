import express, { Router } from 'express';
import { AppRouter } from './routes';

interface Options {
    port: string,
    routes: Router
}

export class Server {

    private app = express();
    private port: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    execute() {
        this.app.use(express.json());
        this.app.use(this.routes)
        this.app.listen(this.port, () => {
            console.log(`listen port ${this.port}`)
        })
    }

}