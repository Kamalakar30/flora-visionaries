import PlantCard from "./PlantCard";
import plants from "../data/Plants";

function TrendingPlants() {
  return (
    <section className="py-20 bg-[#F5F8F1]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Our Collection
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Trending Plants
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our most loved indoor plants that bring freshness,
            beauty, and positive vibes to your home.
          </p>
        </div>

        {/* Plant Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              name={plant.name}
              price={plant.price}
              category={plant.category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrendingPlants;