import session from "express-session";
import Redis from "ioredis";
import { Express } from "../../@core";

export class RedisHelper {
  public static readonly redisClient = new Redis()
  public startWithSession(): void {
    const RedisStore = require("connect-redis")(session);
    Express.application.use(
      session({
        store: new RedisStore({ client: RedisHelper.redisClient }),
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET || "secret",
        resave: false,
        cookie: { maxAge: 1000 * 60 * 10 },
      })
    );
  }
}
