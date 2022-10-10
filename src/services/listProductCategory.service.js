import database from "../database";

const listProductCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM categories c JOIN products p ON c.id = p.category_id WHERE c.id = $1",
      [category_id]
    );

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductCategoryService;
