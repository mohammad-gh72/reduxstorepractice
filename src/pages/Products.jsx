import { Filters, Pagination, ProductsGridView } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  try {
    const url = request.url;
    const queryString = Object.fromEntries([
      ...new URL(url).searchParams.entries(),
    ]);
    // console.log(queryString);
    const response = await customFetch("products", {
      params: queryString,
    });

    return { queryString, ...response };
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

function Products() {
  return (
    <div className="align-element">
      <Filters />
      <ProductsGridView />
      <Pagination />
    </div>
  );
}
export default Products;
