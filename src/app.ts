import { AppRouter } from './application/routes';
import { Server } from './application/server'
import { envs } from './config/envs';

(() => {

    const options = {
        port:envs.PORT,
        routes:AppRouter.routes()
    }

    const server = new Server(
        options
    );

    server.execute();
})(); 