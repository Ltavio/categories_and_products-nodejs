import uploadCategoryService from "../services/uploadCategory.service";

const uploadCategoryController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const uploadCategory = await uploadCategoryService(id, name);

    return response.status(200).json(uploadCategory);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default uploadCategoryController;
