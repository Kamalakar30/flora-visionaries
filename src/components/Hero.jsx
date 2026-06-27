import indoorplant from "../assets/images/indoorplant.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#132012] text-white">

      {/* Decorative Background */}
      <div className="absolute w-96 h-96 bg-green-700/20 rounded-full blur-3xl -top-24 -left-24"></div>

      <div className="absolute w-80 h-80 bg-green-500/10 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left */}

          <div>

            <p className="uppercase tracking-[6px] text-green-400 mb-5 font-semibold">
              Indoor Plants
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Bring Nature
              <br />
              Into Your Home
            </h1>

            <p className="text-gray-300 mt-8 text-lg leading-8 max-w-lg">
              Discover beautiful indoor plants that improve your home's
              atmosphere and make every corner feel fresh and alive.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full font-semibold shadow-lg">
                Shop Now
              </button>

              <button className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full">
                Explore
              </button>

            </div>

            {/* Statistics */}

            <div className="flex gap-12 mt-16">

              <div>
                <h2 className="text-3xl font-bold">120+</h2>
                <p className="text-gray-400">Plants</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">80+</h2>
                <p className="text-gray-400">Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-gray-400">Years</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[40px] shadow-2xl">

              <img
              src={indoorplant}
                
                alt="Indoor Plant"
                className="rounded-3xl w-full max-w-md hover:scale-105 transition duration-500"

/>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;