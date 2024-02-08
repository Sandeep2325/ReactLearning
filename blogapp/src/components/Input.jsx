import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId;
  return (
    <div className="w-100">
      {label && (
        <label htmlFor={id} className="mb-1 d-inline-block ps-1">
          {label}
        </label>
      )}
      <input
        className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-200 w-full ${className}`}
        style={{ outline: none }}
        type={type}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
