import { Form, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSlider from "./FormSlider";
import FormList from "./FormList";

function Filters() {
  const {
    queryString,
    data: { meta },
  } = useLoaderData();

  const { categories, companies } = meta;

  const { search, price, category, company, order, shipping } = queryString;
  console.log(categories);

  return (
    <Form
      className="align-element text-[white] lg:flex lg:flex-row lg:gap-0 sm:flex-col sm:gap-4"
      style={{ backgroundColor: "rgba(20,20,30,5)" }}
    >
      <div className="flex flex-col justify-center ">
        <FormInput type="text" name="search" defaultValue={search} />

        <FormSlider
          min={100}
          max={100000}
          step={999}
          type="range"
          name="price"
          defaultValue={price}
        />
      </div>
      <div className="flex lg:flex-row  flex-col translate-y-1">
        <div>
          <FormInput
            width={15}
            label="shipping"
            type="checkbox"
            name="shipping"
            defaultValue={shipping}
          />
        </div>
        <div>
          <FormList
            label="category"
            name="category"
            options={categories}
            defaultValue={category}
          />
        </div>
        <div>
          <FormList
            label="company"
            name="company"
            options={companies}
            defaultValue={company}
          />
        </div>
        <div>
          <FormList
            label="order"
            name="order"
            options={["a-z", "z-a", "high", "low"]}
            defaultValue={order}
          />
        </div>
      </div>
    </Form>
  );
}
export default Filters;
