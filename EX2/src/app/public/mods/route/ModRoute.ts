import { Router } from "express";
import modController from "../controller/ModController";

class ModRoute {
    public apiRouteMod: Router;

    constructor() {
        this.apiRouteMod = Router();
        this.loadRoutes();
    }

    public loadRoutes(): void {
        this.apiRouteMod.get("/all", modController.getMods);
        this.apiRouteMod.post("/add", modController.createMod);
        this.apiRouteMod.put("/update/:cod", modController.updateMod);
        this.apiRouteMod.delete("/delete/:cod", modController.deleteMod);
    }
}

const modRoute = new ModRoute();
export default modRoute.apiRouteMod;