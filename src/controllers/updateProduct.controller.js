import updateProductService from "../services/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price, category_id } = request.body;

  try {
    const updateProduct = await updateProductService(
      id,
      name,
      price,
      category_id
    );

    return response.status(200).json(updateProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateProductController;
