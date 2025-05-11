import ProductsGridView from "./ProductsGridView";

function FeaturedProducts() {
  return (
    <div className="mt-16  ">
      <h2
        className="text-[var(--primary-color)] mb-2 "
        style={{ fontSize: "var(--title-fontsize)" }}
      >
        Featured
      </h2>
      <ProductsGridView />
    </div>
  );
}
export default FeaturedProducts;
