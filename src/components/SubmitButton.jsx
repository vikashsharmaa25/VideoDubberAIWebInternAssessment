import React from "react";

const SubmitButton = () => {
  const submitHandler = () => {
    alert("submit testing successfully");
  };
  return (
    <div className="mt-4 text-center lg:text-right">
      <button
        onClick={submitHandler}
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
