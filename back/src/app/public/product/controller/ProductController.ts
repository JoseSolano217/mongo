import { Request, Response } from "express";
import ProductDAO from "../dao/ProductDAO";

class ProductController extends ProductDAO {
    public getProducts(req: Request, res: Response): void {
        ProductController.consultProducts(res);
    }

    public createProduct(req: Request, res: Response): void {
        ProductController.addProduct(res, req.body);
    }

    public updateProduct(req: Request, res: Response): void {
        ProductController.updateProduct(res, req.body._id, req.body)
    }

    public deleteProduct(req: Request, res: Response): void {
        ProductController.deleteProduct(res, req.params.cod)
    }
}

const productController = new ProductController();
export default productController