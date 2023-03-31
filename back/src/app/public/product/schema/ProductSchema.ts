import { model, Schema } from "mongoose";
import Product from "../entity/Product";

const productSchema = new Schema<Product>(
    {
        productName: {type: String, required: true, unique: true},
        productValue: {type: Number, required: true},
        productAmount: {type: Number, required: true},
        expireDate: {type: Date}
    }, 
    {
        versionKey: false
    }
)

export default model("Product", productSchema, "Product")