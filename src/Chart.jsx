import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export default function Chart() {
  const subjectMarks = [
    {
      id: 1,
      name: "John Doe",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 92,
    },
    {
      id: 2,
      name: "Alice Smith",
      math_marks: 75,
      physics_marks: 88,
      chemistry_marks: 85,
    },
    {
      id: 3,
      name: "Bob Johnson",
      math_marks: 78,
      physics_marks: 80,
      chemistry_marks: 75,
    },
    {
      id: 4,
      name: "Catherine Lee",
      math_marks: 88,
      physics_marks: 90,
      chemistry_marks: 89,
    },
    {
      id: 5,
      name: "David Kim",
      math_marks: 95,
      physics_marks: 85,
      chemistry_marks: 93,
    },
    {
      id: 6,
      name: "Eva Martinez",
      math_marks: 81,
      physics_marks: 76,
      chemistry_marks: 80,
    },
    {
      id: 7,
      name: "Frank Brown",
      math_marks: 67,
      physics_marks: 72,
      chemistry_marks: 68,
    },
    {
      id: 8,
      name: "Grace Wilson",
      math_marks: 90,
      physics_marks: 95,
      chemistry_marks: 91,
    },
    {
      id: 9,
      name: "Henry Clark",
      math_marks: 74,
      physics_marks: 70,
      chemistry_marks: 72,
    },
    {
      id: 10,
      name: "Isabella Moore",
      math_marks: 89,
      physics_marks: 82,
      chemistry_marks: 88,
    },
  ];

  return (
    <div className="flex justify-center mt-10 border-4 border-purple-700 rounded-xl m-3">
      <LineChart width={1400} height={400} data={subjectMarks}>
        <XAxis dataKey="name" />
        <YAxis dataKey="" />
        <Line type="monotone" dataKey="math_marks" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics_marks" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry_marks" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
