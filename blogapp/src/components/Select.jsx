import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId;
  return (
    <div className="w-100">
      {label && (
        <label htmlFor={id} className="mb-1 d-inline-block ps-1 px-3">
          {label}
        </label>
      )}
      <select
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-200 w-full ${className}`}
        id={id}
        ref={ref}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
