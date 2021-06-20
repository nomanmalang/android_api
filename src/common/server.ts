import * as dotenv from "dotenv";
import express, { Application } from 'express';
import http from 'http';
import helmet from "helmet";
import cors from 'cors'

const app = express();
export default class ExpressServer {
    //@ts-ignore
  private routes: (app: Application) => void;

  constructor() {
    dotenv.config();

    if (!process.env.PORT) {
        process.exit(1);
    }

    app.use(helmet());
    app.use(cors());
    app.use(express.json());
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }

  listen(port: number): Application {
    this.routes(app);
    http.createServer(app).listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
    return app;
  }
}