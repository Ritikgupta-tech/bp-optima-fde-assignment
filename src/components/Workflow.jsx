function Workflow() {

  const steps = [
    "Evidence Collected",
    "Evidence Extraction",
    "Rules Applied",
    "Decision Generated",
    "Audit Trail Stored",
  ];

  return (
    <section className="py-24 bg-gray-50">

      <h1 className="text-5xl font-bold text-center">
        GroundSret Workflow
      </h1>

      <div className="max-w-3xl mx-auto mt-16">

        {steps.map((step, index) => (
          <div key={index}>

            <div className="bg-white shadow p-6 rounded-2xl text-center">
              {step}
            </div>

            {index !== steps.length - 1 && (
              <div className="h-10 w-[2px] bg-gray-300 mx-auto"></div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default Workflow;