import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import routerCategory from "./routers/category.routes";
import routerProducts from "./routers/products.routes";

const app = express();

app.use(express.json());

app.use("/categories", routerCategory);
app.use("/products", routerProducts);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
