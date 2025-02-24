import { createProduct, getAllProduct,getProductById,deleteProductById,updateProductById } from "../controllers/productController.js";
import express from 'express';



const productRouter=express();
contactRouter.post("/createProduct", createProduct);
contactRouter.get("/getAllProduct",getAllProduct);
contactRouter.get("/getProductById/:id",getProductById);
contactRouter.delete("/deleteProductById/:id",deleteProductById);
contactRouter.put("/updateProductById/:id",updateProductById);
export default productRouter;
