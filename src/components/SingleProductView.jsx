import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { Button } from "./shared";
import { transform } from "typescript";
import FormList from "./FormList";

function SingleProductView() {
  const { data } = useLoaderData();
  const {
    title,
    company,
    description,
    featured,
    category,
    image,
    price,
    shipping,
    colors,
  } = data.data.attributes;

  const priceinDollar = formatPrice(price);
  return (
    <div className="flex flex-col w-[100%]">
      <div
        className="flex justify-between items-center mb-4  text-[20px] capitalize bg-[var(--primary-color)] p-2 "
        style={{
          color: "var(--secondary-color)",
        }}
      >
        <h2>{title}</h2>
        <div className="text-[14px]">
          Shipping:
          {shipping ? <span className="animate-pulse">🟢</span> : "🔴"}
        </div>
      </div>
      <div className=" lg:flex lg:flex-row  md:flex md:flex-col  ">
        <div className="  w-[100%] ">
          <img
            onError={(e) => {
              e.target.src = "../imgloaderror.png";
            }}
            src={image}
            alt={title}
            className="w-full h-[300px] object-cover"
          />
        </div>

        <p className="lg:ml-4 mt-2 ">{description}</p>
      </div>
      <div className="flex  items-center ">
        <span
          className="bg-[var(--primary-color)] p-2 mt-4 block w-[fit-content] min-w-[167px]"
          style={{
            color: "var(--secondary-color)",
            clipPath: "polygon(0 1%, 60% 0, 100% 100%, 0% 100%)",
          }}
        >
          {priceinDollar}
        </span>
        <Button
          className="flex justify-center items-center translate-x-[-90px] mt-4 relative "
          style={{
            clipPath: `polygon(19% 0, 100% 0, 100% 100%, 60% 100%)`,
            color: "var(--secondary-color)",
          }}
        >
          <span className=" text-[12px] absolute  right-[10px]">
            Add to cart
          </span>
        </Button>
        <FormList options={10} className=" translate-x-[-100px] mt-4 " />
      </div>
    </div>
  );
}
export default SingleProductView;
