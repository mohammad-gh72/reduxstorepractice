import { FeaturedProducts } from "../components";
import Margin from "../components/Margin";
import { customFetch } from "../utils";

export const loader = async () => {
  try {
    const response = await customFetch("/products", {
      params: { featured: true },
    });
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

function LandingPage() {
  return (
    <div>
      {/* <Margin /> */}
      <FeaturedProducts />
    </div>
  );
}
export default LandingPage;
