import { Response } from "express";
import ProductSchema from "../schema/ProductSchema";

class ProductDAO {
    protected static async consultProducts(res: Response): Promise<any> {
        const myProducts = await ProductSchema.find();
        res.status(200).json(myProducts);
    }

    protected static async addProduct(res: Response, params: any): Promise<any> {
        const newProduct = new ProductSchema(params);
        newProduct.save().then((obj) => {
            res.status(200).json({"Message": "Product added", "object": obj});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"response": "Product not added"});
        })
    }

    protected static async updateProduct(res: Response, identifier: string, params: any): Promise<any> {
        const exists = await ProductSchema.findById(identifier);

        if (exists) {
            await ProductSchema.findByIdAndUpdate({_id: identifier}, {$set: params}).then((object: any) => {
                res.status(200).json({"old": object, "new": params})
            }).catch((e) => {
                console.log(e)
                res.status(400).json({"warning": "A foreign substance has been detected in the reactor"});
            });
        } else {
            res.status(400).json({"message": "Product does not exist"})
        }
    }

    protected static async deleteProduct(res: Response, identifier: string): Promise<any> {
        const exists = await ProductSchema.findById(identifier);

        if (exists) {
            await ProductSchema.findByIdAndDelete({_id: identifier}).then((object: any) => {
                res.status(200).json({"old": object})
            }).catch((e) => {
                console.log(e)
                res.status(400).json({"warning": "A foreign substance has been detected in the reactor"});
            });
        } else {
            res.status(400).json({"message": "Product does not exist"})
        }
    }
}

export default ProductDAO;