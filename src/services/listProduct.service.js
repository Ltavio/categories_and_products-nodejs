import database from "../database";

const listProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductService;
