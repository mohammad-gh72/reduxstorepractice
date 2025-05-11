import { useState } from "react";
import { Form, useSubmit } from "react-router-dom";
import { formatPrice } from "../utils";

function FormSlider({ name, min, max, step, defaultValue }) {
  const [rangeValue, setRangeValue] = useState(min);
  const submit = useSubmit(); // used to programmatically submit a form in React Router

  return (
    <div className="p-4 flex flex-col w-[250px]">
      <label className="text-[14px]" htmlFor={name}>
        {formatPrice(rangeValue)}
      </label>
      <input
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        type="range"
        name={name}
        id={name}
        onChange={(e) => {
          setRangeValue(e.target.value);
          submit(e.currentTarget.form);
        }}
      />
    </div>
  );
}
export default FormSlider;
