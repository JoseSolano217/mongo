import { Request, Response } from "express";
import ProductDAO from "../dao/ProductDAO";

class ProductController extends ProductDAO {
    public getProducts(req: Request, res: Response): void {
        ProductController.consultProducts(res);
    }

    public createProduct(req: Request, res: Response): void {
        ProductController.addProduct(res, req.body);
    }
}

const productController = new ProductController();
export default productController