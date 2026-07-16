function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <h1 className="text-2xl font-bold tracking-tight">
          BP <span className="text-gray-500">OPTIMA</span>
        </h1>

        <div className="flex items-center gap-8">
          <a href="#">Product</a>
          <a href="#">GroundSret</a>
          <a href="#">About</a>

          <button className="bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition">
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;