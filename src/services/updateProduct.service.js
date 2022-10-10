import database from "../database";

const updateProductService = async (id, name, price, category_id) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [name, price, category_id, id]
    );

    if (res.rows.length === 0) {
      throw "User not found";
    }

    return { message: "Product update", Product: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
