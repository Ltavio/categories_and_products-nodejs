import listProductService from "../services/listProduct.service";

const listProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const listProduct = await listProductService(id);

    return response.status(200).json(listProduct);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default listProductController;
