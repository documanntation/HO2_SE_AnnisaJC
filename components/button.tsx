import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="mt-4 px-4 py-2 text-lg text-white bg-blue-300 rounded hover:bg-gray-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
