import database from "../database";
import { v4 as uuidv4 } from "uuid";

const createProductService = async (name, price, category_id) => {
  try {
    const res = await database.query(
      "INSERT INTO products(name, price, category_id, id) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, category_id, uuidv4()]
    );

    return { message: "Product create", Product: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;
