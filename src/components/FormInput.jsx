import { useSubmit } from "react-router-dom";

function FormInput({
  type,
  name,
  label,
  defaultValue,
  width = 200,
  className,
}) {
  const submit = useSubmit();
  return (
    <div className="p-4 w-fit flex gap-2  ">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        style={{ width: `${width}px` }}
        className={`p-1 border-1 border-[var(--accent-color)] outline-0 ${className}`}
        type={type}
        name={name}
        id={name}
        placeholder={` ${label ? "" : name + "..."}`}
        defaultValue={defaultValue}
        onChange={(e) => {
          if (type === "checkbox") submit(e.target.form);
        }}
      />
    </div>
  );
}
export default FormInput;
