import cheeseplant from "../assets/images/cheeseplant.png";

function Best02() {
  return (
    <section className="bg-[#132012] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={cheeseplant}
              alt="Swiss Cheese Plant"
              className="w-full max-w-md rounded-3xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="uppercase text-green-400 tracking-widest mb-3">
              Best O₂ Plant
            </p>

            <h2 className="text-5xl font-bold text-white mb-6">
              Swiss Cheese Plant
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Swiss Cheese Plant is one of the most popular indoor plants.
              It purifies the air, improves oxygen levels, and adds an
              elegant tropical appearance to your home.
            </p>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                Easy Maintenance
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                Air Purifying
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span>
                Decorative Indoor Plant
              </div>

            </div>

            <button className="mt-10 bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-full text-white font-semibold">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Best02;