import { Router } from "express";

import createProductController from "../controllers/createProduct.controller";
import listProductsController from "../controllers/listProducts.controller";
import listProductController from "../controllers/listProduct.controller";
import updateProductController from "../controllers/updateProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";

const routerProducts = Router();

routerProducts.post("", createProductController);
routerProducts.get("", listProductsController);
routerProducts.get("/:id", listProductController);
routerProducts.patch("/:id", updateProductController);
routerProducts.delete("/:id", deleteProductController);

export default routerProducts;
