import React from "react";
import Price from "./Price";

export default function Prices() {
  const gymPlan = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 fitness class per week",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 35,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Pool access",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 50,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Pool access",
        "Personal trainer sessions",
        "Sauna access",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 80,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Pool access",
        "Personal trainer sessions",
        "Sauna and steam room access",
        "Massage therapy",
      ],
    },
  ];

  return (
    <div>
      <h1 className="md:text-5xl text-purple-700 font-bold text-center mt-10 text-2xl  ">
        Best {gymPlan.length} Features Plan for Gym in Raniganj{" "}
      </h1>
      <div className="flex justify-center mt-10 gap-5  ">
        {gymPlan.map((plan, index) => (
          <Price plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
}
