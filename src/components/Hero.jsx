function Hero() {
  return (
    <section className="relative py-36 px-6 overflow-hidden">

      {/* Background Gradient */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-blue-100
        blur-[150px]
        opacity-50
        -rotate-12
        -z-10
      "
      />

      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-gray-100
          text-sm
          mb-8
          font-medium
        "
        >
          AI-Native Decision Infrastructure
        </div>

        {/* Heading */}
        <h1
          className="
          text-6xl
          md:text-7xl
          lg:text-8xl
          font-bold
          leading-none
          tracking-tight
        "
        >
          Decisions
          <br />
          shouldn't feel
          <br />
          like magic.
        </h1>

        {/* Description */}
        <p
          className="
          mt-8
          text-xl
          md:text-2xl
          text-gray-500
          max-w-4xl
          mx-auto
          leading-relaxed
        "
        >
          GroundSret transforms evidence into
          explainable enterprise decisions with
          complete audit trails.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          <button
            className="
            bg-black
            text-white
            px-8
            py-4
            rounded-2xl
            hover:scale-105
            transition
          "
          >
            Book Demo
          </button>

          <button
            className="
            border
            px-8
            py-4
            rounded-2xl
            hover:bg-gray-100
            transition
          "
          >
            Explore GroundSret
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;