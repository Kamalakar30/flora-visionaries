import reviews from "../data/ReviewData";
import ReviewCard from "./ReviewCard";

function Review() {
  return (
    <section className="py-20 bg-[#F5F8F1]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="uppercase text-green-600 tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Thousands of happy customers trust us to bring nature into
            their homes.
          </p>

        </div>

        {/* Reviews */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (
            <ReviewCard
              key={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              review={item.review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Review;