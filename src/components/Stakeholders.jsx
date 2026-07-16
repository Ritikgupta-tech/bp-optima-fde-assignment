import { useState } from "react";
import DynamicContent from "./DynamicContent";

function Stakeholders() {

  const [role, setRole] = useState("CRO");

  const roles = [
    "CRO",
    "CTO",
    "Investor",
    "Engineer",
  ];

  return (
    <section
      id="stakeholders"
      className="py-24"
    >
      <h1 className="text-5xl font-bold text-center">
        Who Are You?
      </h1>

      <p className="text-center text-gray-500 mt-5">
        Explore BP Optima from your perspective.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        {roles.map((item) => (
          <button
            key={item}
            onClick={() => setRole(item)}
            className="
            px-8 py-4
            rounded-full
            bg-white
            shadow
            hover:bg-black
            hover:text-white
            transition
            "
          >
            {item}
          </button>
        ))}

      </div>

      <DynamicContent role={role} />
    </section>
  );
}

export default Stakeholders;