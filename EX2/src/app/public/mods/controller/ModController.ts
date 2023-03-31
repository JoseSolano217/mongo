import { Request, Response } from "express";
import ModDAO from "../dao/ModDao";

class ModController extends ModDAO {
    public getMods(req: Request, res: Response): void {
        ModController.consultMods(res);
    }

    public createMod(req: Request, res: Response): void {
        ModController.addMod(res, req.body);
    }

    public updateMod(req: Request, res: Response): void {
        ModController.updateMod(res, req.params.cod, req.body)
    }

    public deleteMod(req: Request, res: Response): void {
        ModController.deleteMod(res, req.params.cod)
    }
}

const productController = new ModController();
export default productController