import listProductCategoryService from "../services/listProductCategory.service";

const listProductCategoryController = async (request, response) => {
  const { category_id } = request.params;

  try {
    const product = await listProductCategoryService(category_id);

    return response.status(200).json(product);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listProductCategoryController;
