import React from "react";

export const Card = ({
  src,
  users,
  price,
  storage,
  granted,
  upload,
  style,
  middleCardStyle,
  middleCardImageStyle,
}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${middleCardStyle}`}
    >
      <img
        className={`w-20 mx-auto mt-[-3rem] bg-white ${middleCardImageStyle}`}
        src={src}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{users}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage}</p>
        <p className="py-2 border-b mx-8">{granted}</p>
        <p className="py-2 border-b mx-8">{upload}</p>
      </div>
      <button
        className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
        style={style}
      >
        Start Trial
      </button>
    </div>
  );
};
