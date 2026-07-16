function Footer() {
  return (
    <footer className="bg-[#111827] text-white p-20">

      <div className="max-w-7xl mx-auto flex justify-between flex-wrap">

        <div>
          <h1 className="text-4xl font-bold">
            BP OPTIMA
          </h1>

          <p className="mt-5 text-gray-400 max-w-sm">
            Built for decisions that must
            be explained, not guessed.
          </p>
        </div>

        <div className="space-y-3 mt-10 md:mt-0">
          <p>Product</p>
          <p>GroundSret</p>
          <p>About</p>
          <p>Contact</p>
        </div>

      </div>

      <hr className="my-10" />

      <p className="text-gray-500">
        © 2026 BP Optima Assignment | Ritik Gupta
      </p>
    </footer>
  );
}

export default Footer;