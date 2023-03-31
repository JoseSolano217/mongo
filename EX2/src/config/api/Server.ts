import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectionDB from "../connection/connectionDB";

import apiRouteMod from "../../app/public/mods/route/ModRoute";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    dotenv.config({ path: ".env" });
    connectionDB();
    
    this.initializeServer();
    this.activateRoutes();
  }

  public initializeServer(): void {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
  }

  public activateRoutes(): void {
    this.app.use("/api/public/mod", apiRouteMod);
  }

  public startServer(): void {
    this.app.listen(this.app.get("PORT"), () => {
      const port = this.app.get("PORT");
      console.log("Server deployed in " + port);
    });
  }
}

export default Server;
