import listCategoryService from "../services/listCategory.service";

const listCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const listCategory = await listCategoryService(id);

    return response.status(200).json(listCategory);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default listCategoryController;
