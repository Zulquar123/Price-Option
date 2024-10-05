import React from "react";
import { Audio, Triangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center gap-6 ">
      <div className="border-4 border-purple-700 rounded-xl">
        <Audio
          height="400"
          width="400"
          radius="50"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>

      <div className="border-4 border-purple-700 rounded-xl">
        <Triangle
          visible={true}
          height="400"
          width="400"
          color="green"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}
