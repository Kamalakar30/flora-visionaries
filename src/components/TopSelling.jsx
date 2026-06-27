import PlantCard from "./PlantCard";
import topSelling from "../data/TopSelling";

function TopSelling() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-green-600 uppercase tracking-widest font-semibold">
            Best Collection
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-800">
            Top Selling Plants
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topSelling.map((plant) => (
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

export default TopSelling;