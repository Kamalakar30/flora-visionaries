import indoorplant from "../assets/images/indoorplant.jpg";

function Featured() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#1B2A1B] rounded-3xl p-10">

        <div>

          <h2 className="text-5xl font-bold leading-tight">
            Bring Nature
            <br />
            Into Your Home
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Our premium indoor plants improve air quality,
            beautify your home, and create a relaxing
            environment.
          </p>

          <button className="mt-8 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 transition">
            Shop Now
          </button>

        </div>

        <div className="flex justify-center">

          <img
            src={indoorplant}
            alt="Featured Plant"
            className="w-80 md:w-96 rounded-3xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Featured;