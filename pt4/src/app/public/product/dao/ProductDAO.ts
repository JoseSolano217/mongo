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
}

export default ProductDAO;