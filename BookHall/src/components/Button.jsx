import React from "react";

const Button = ({ children, onClick, variant = "primary", size = "md", className = "", ...props }) => {
  let variantStyles = "";
  let sizeStyles = "";

  // Variant styles
  if (variant === "primary") {
    variantStyles = "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "secondary") {
    variantStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  } else if (variant === "destructive") {
    variantStyles = "bg-red-600 text-white hover:bg-red-700";
  }

  // Size styles
  if (size === "sm") {
    sizeStyles = "text-sm py-1 px-3";
  } else if (size === "md") {
    sizeStyles = "text-base py-2 px-4";
  } else if (size === "lg") {
    sizeStyles = "text-lg py-3 px-6";
  }

  const baseStyles = `rounded font-medium focus:outline-none transition ${variantStyles} ${sizeStyles} ${className}`;

  return (
    <button onClick={onClick} className={baseStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
