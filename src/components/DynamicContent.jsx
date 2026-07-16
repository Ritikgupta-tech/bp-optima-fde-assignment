function DynamicContent({ role }) {

  const data = {

    CRO: {
      title: "Built For Trust",
      description:
        "Every decision is explainable and audit-ready.",

      points: [
        "99.8% Audit Coverage",
        "Decision Traceability",
        "Compliance Ready",
      ],
    },

    CTO: {
      title: "Built For Scale",

      description:
        "Integrate seamlessly into your enterprise stack.",

      points: [
        "REST APIs",
        "Enterprise Integrations",
        "Scalable Infrastructure",
      ],
    },

    Investor: {
      title: "Built For Growth",

      description:
        "A scalable platform designed for enterprise expansion.",

      points: [
        "Large Market Opportunity",
        "Enterprise Demand",
        "Scalable Model",
      ],
    },

    Engineer: {
      title: "Built For Builders",

      description:
        "Developer-first systems designed for transparency.",

      points: [
        "JSON Outputs",
        "Rules Engine",
        "Developer Experience",
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 px-10">

      <div className="bg-white rounded-3xl shadow-xl p-12">

        <h1 className="text-5xl font-bold">
          {data[role].title}
        </h1>

        <p className="mt-5 text-gray-500">
          {data[role].description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {data[role].points.map((item, index) => (
            <div
              key={index}
              className="
              border
              rounded-2xl
              p-8
              hover:shadow-xl
              transition
              "
            >
              <h2 className="font-semibold text-lg">
                {item}
              </h2>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default DynamicContent;