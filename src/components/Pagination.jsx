import { Link, useLoaderData, useLocation } from "react-router-dom";
import { constructUrl } from "../utils/pagination";

function Pagination() {
  const { data: productData } = useLoaderData();
  const { data, meta } = productData;
  const { pagination } = meta;
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search);
  const pageParamNumber = Number(query.get("page")) || 1;

  return (
    <div
      className="align-element ]"
      style={{
        backgroundColor: "rgba(20,20,30,5)",
        color: "var(--secondary-color)",
      }}
    >
      {Number(pagination.pageCount) !== 1 && (
        <div className="flex gap-4 p-2 ">
          {[...Array(pagination.pageCount)].map((_, ind) => {
            const pageNum = ind + 1;
            const qString = constructUrl(pathname, search, pageNum);
            return (
              <Link
                key={pageNum}
                to={`${qString}`}
                className="flex justify-center items-center w-6 h-6 bg-[var(--primary-color)] p4 hover:animate-pulse cursor-pointer "
                style={{
                  backgroundColor:
                    pageParamNumber === pageNum ? "black" : undefined,
                  color: pageParamNumber === pageNum ? "white" : undefined,
                }}
              >
                {pageNum}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Pagination;
