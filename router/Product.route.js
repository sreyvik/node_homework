import express from "express";
import ProductController from "../controllers/Product.Controller.js";

const productRoute = express.Router();

productRoute.get("/" , ProductController.index)

productRoute.get("/show/:id" , ProductController.show)

productRoute.post("/" , ProductController.create)

productRoute.put("/update/:id" , ProductController.update)

productRoute.delete("/destroy" , ProductController.destroy)
    
export default productRoute;