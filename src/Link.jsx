import React from "react";

export default function Link({ route }) {
  const { id, name, path } = route;
  return (
    <div>
      {
        <li className="mr-10 mb-3 font-bold text-3xl hover:bg-sky-500 hover:rounded hover:p-1 hover:duration-200 hover:text-black ">
          <a href={path}>{name}</a>
        </li>
      }
    </div>
  );
}
