import updateCategoryService from "../services/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const updateCategory = await updateCategoryService(id, name);

    return response.status(200).json(updateCategory);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateCategoryController;
