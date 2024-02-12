import React from "react";

function Button({
  children,
  type = "Button",
  bgColor = "bg-primary",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return <button
  className={`px-4 py-2 btn btn-primary rounded-lg ${bgColor} ${textColor} ${className} `} {...props}
  >{children}</button>;
}

export default Button;
