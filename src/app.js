import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import routerCategory from "./routers/users.routes";

const app = express();

app.use(express.json());

app.use("/categories", routerCategory);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
