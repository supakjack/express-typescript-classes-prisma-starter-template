import { Express } from "./@core";
import { RedisHelper, ErrorHelper } from "./@core/helper";
import routes from "./routes";
const app = new Express();
// const redisHelper = new RedisHelper();  uncomment to use session with redis
// redisHelper.startWithSession();         uncomment to use session with redis
routes(Express.application);
ErrorHelper.start();
app.start();
