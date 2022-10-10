import database from "../database";

const updateCategoryService = async (id, name) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw "Category not found";
    }

    return { message: "Category update", Category: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;
