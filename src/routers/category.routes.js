import { Router } from "express";

import createCategoriesController from "../controllers/createCategories.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoryController from "../controllers/listCategory.controller";
import updateCategoryController from "../controllers/updateCategory.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";

const routerCategory = Router();

routerCategory.post("", createCategoriesController);
routerCategory.get("", listCategoriesController);
routerCategory.get("/:id", listCategoryController);
routerCategory.patch("/:id", updateCategoryController);
routerCategory.delete("/:id", deleteCategoryController);

export default routerCategory;
