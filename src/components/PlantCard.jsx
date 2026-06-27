import { FiShoppingCart } from "react-icons/fi";

function PlantCard({ image, name, price, category }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
         className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
         //className="w-full h-56 md:h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-green-600 text-sm font-semibold uppercase">
          {category}
        </p>

        <h3 className="text-2xl font-bold mt-2 text-gray-800">
          {name}
        </h3>

        <div className="flex text-yellow-500 mt-2">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="flex justify-between items-center mt-5">

          <h2 className="text-2xl font-bold text-green-700">
            ${price}
          </h2>

          <button className="bg-green-600 hover:bg-green-700 hover:scale-110 transition-all duration-300 text-white p-3 rounded-full">
            <FiShoppingCart />
          </button>

        </div>

      </div>

    </div>
  );
}

export default PlantCard;