import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Price({ plan, index }) {
  const { name, price, features } = plan;
  return (
    <div className="border-4 border-purple-600 rounded-2xl p-7 w-[22%] flex flex-col">
      <h1 className="text-center text-3xl mb-5 font-bold">
        <span>Price : ${price}</span>
        <span>/mon</span>
      </h1>
      <h1 className="text-2xl text-[#FFD700] mb-2">Plan : {name}</h1>
      <div className="flex-grow">
        <h1 className="font-bold text-green-500 mb-2">Features : </h1>
        {features.map((feature) => (
          <ul>
            <li>
              <FaCheckCircle className="inline text-green-500" /> &nbsp;
              {feature}
            </li>
          </ul>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <button className="bg-green-800 text-2xl font-bold rounded-xl px-3  py-1 hover:bg-green-500 hover:text-black">
          {" "}
          Buy Now
        </button>
      </div>
    </div>
  );
}
