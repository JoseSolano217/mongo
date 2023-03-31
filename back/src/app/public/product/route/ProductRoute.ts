import { Router } from "express";
import productController from "../controller/ProductController";

class ProductRoute {
    public apiRouteProduct: Router;

    constructor() {
        console.log("Here");
        
        this.apiRouteProduct = Router();
        this.loadRoutes();
    }

    public loadRoutes(): void {
        this.apiRouteProduct.get("/all", productController.getProducts);
        this.apiRouteProduct.post("/add", productController.createProduct);
        this.apiRouteProduct.put("/update", productController.updateProduct);
        this.apiRouteProduct.delete("/delete/:cod", productController.deleteProduct);
    }
}

const productRoute = new ProductRoute();
export default productRoute.apiRouteProduct;