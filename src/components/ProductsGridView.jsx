import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsGridView() {
  const { data: productInfo } = useLoaderData();
  const { data: product, meta } = productInfo;
  // console.log(product, meta);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  bg-[var(--secondary-color)] p-8 gap-2 sm:grid-cols-1 ">
        {product.map((item) => {
          const { title, image, price } = item.attributes;

          const priceInDollar = formatPrice(price);
          return (
            <Link
              to={`/pr/${item.id}`}
              key={item.id}
              className="bg-[var(--accent-color)] p-4 cursor-pointer "
            >
              <img
                onError={(e) => {
                  e.target.src = "../imgloaderror.png";
                }}
                src={image}
                alt={title}
                className="object-cover w-[300px]  h-[300px]"
              ></img>
              <h2
                className="mb-2 mt-2 capitalize font-[600]"
                style={{ fontSize: "var(--products-fontsize)" }}
              >
                {title}
              </h2>
              <h3>{priceInDollar}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default ProductsGridView;
