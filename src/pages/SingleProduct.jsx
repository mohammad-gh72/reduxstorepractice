import SingleProductView from "../components/SingleProductView";
import { customFetch } from "../utils";

export const loader = async ({ params }) => {
  try {
    const { id } = params;
    const response = await customFetch(`products/${id}`);
    console.log(id);
    console.log(response);
    return response;
  } catch (error) {
    // 1. Detect axios errors
    if (error.response) {
      // Server responded with status other than 2xx
      throw new Response(error.response.statusText, {
        status: error.response.status,
      });
    } else if (error.request) {
      // No response received
      throw new Response({
        status: 503,
        statusText: "No response from server",
      });
    } else {
      // Something else (like a bug in your code)
      throw new Response({
        status: 500,
        statusText: '"Unexpected error occurred"',
      });
    }
  }
};

function SingleProduct() {
  return (
    <div>
      <SingleProductView />
    </div>
  );
}
export default SingleProduct;
