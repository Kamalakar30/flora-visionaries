function ReviewCard({ image, name, rating, review }) {
  return (
    <div className="bg-[#1A2B1A] rounded-3xl p-6 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-green-400 object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">{name}</h3>

          <div className="text-yellow-400">
            {"⭐".repeat(rating)}
          </div>
        </div>

      </div>

      <p className="text-gray-300 mt-5 leading-7">
        {review}
      </p>
    </div>
  );
}

export default ReviewCard;