import { Server } from "./core/class";
import routes from "./routes";
const server = new Server();
routes(server.getApplication());
server.errorHandle();
server.start();
