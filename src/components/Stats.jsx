function Stats() {

  const stats = [
    {
      value: "99.8%",
      title: "Audit Coverage",
    },
    {
      value: "< 2 min",
      title: "Decision Time",
    },
    {
      value: "100%",
      title: "Traceability",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-10">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
            bg-white
            shadow-lg
            rounded-2xl
            p-10
            text-center
            hover:-translate-y-2
            transition
            "
          >
            <h1 className="text-5xl font-bold">
              {item.value}
            </h1>

            <p className="mt-4 text-gray-500">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;