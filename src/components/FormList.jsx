import { useState } from "react";
import { useSubmit } from "react-router-dom";

function FormList({ options, name, label, defaultValue, className }) {
  const [value, setValue] = useState();
  const submit = useSubmit();
  return (
    <div className={`${className} flex  gap-2 p-4`}>
      {label && (
        <label className="capitalize" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        defaultValue={defaultValue}
        name={name}
        onChange={(e) => {
          setValue(e.target.value);
          submit(e.target.form);
        }}
        className="border-1 border-gray-600 p-1 w-[fit-content]"
      >
        {typeof options === "number"
          ? [...Array(options)].map((_, index) => (
              <option className="text-black" key={index}>
                {index + 1}
              </option>
            ))
          : options.map((item) => (
              <option className="text-black" key={item}>
                {item}
              </option>
            ))}
      </select>
    </div>
  );
}
export default FormList;
