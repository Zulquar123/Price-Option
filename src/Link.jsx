import React from "react";

export default function Link({ route }) {
  const { id, name, path } = route;
  return (
    <div>
      {
        <li className="mr-10 mb-3 font-bold text-3xl ">
          <a href={path}>{name}</a>
        </li>
      }
    </div>
  );
}
