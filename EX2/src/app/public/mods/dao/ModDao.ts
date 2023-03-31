import { Response } from "express";
import ModSchema from "../schema/ModSchema";

class ProductDAO {
    protected static async consultMods(res: Response): Promise<any> {
        const myMods = await ModSchema.find();
        res.status(200).json(myMods);
    }

    protected static async addMod(res: Response, params: any): Promise<any> {
        const newMod = new ModSchema(params);
        newMod.save().then((obj) => {
            res.status(200).json({"Message": "Mod added", "object": obj});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"response": "Mod not added"});
        })
    }

    protected static async updateMod(res: Response, identifier: string, params: any): Promise<any> {
        const exists = await ModSchema.findById(identifier);

        if (exists) {
            await ModSchema.findByIdAndUpdate({_id: identifier}, {$set: params}).then((object: any) => {
                res.status(200).json({"old": object, "new": params})
            }).catch((e) => {
                console.log(e)
                res.status(400).json({"warning": "A foreign substance has been detected in the reactor"});
            });
        } else {
            res.status(400).json({"message": "Mod does not exist"})
        }
    }

    protected static async deleteMod(res: Response, identifier: string): Promise<any> {
        const exists = await ModSchema.findById(identifier);

        if (exists) {
            await ModSchema.findByIdAndDelete({_id: identifier}).then((object: any) => {
                res.status(200).json({"old": object})
            }).catch((e) => {
                console.log(e)
                res.status(400).json({"warning": "A foreign substance has been detected in the reactor"});
            });
        } else {
            res.status(400).json({"message": "Mod does not exist"})
        }
    }
}

export default ProductDAO;