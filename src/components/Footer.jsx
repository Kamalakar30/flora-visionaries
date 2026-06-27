import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiSend,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#0d180d] text-gray-300 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            FloraVision
          </h2>

          <p className="mt-5 text-gray-400">
            Bring nature into your home with beautiful indoor plants.
          </p>

          <div className="flex gap-4 mt-6 text-2xl">

            <FiFacebook className="hover:text-green-400 cursor-pointer" />
            <FiInstagram className="hover:text-green-400 cursor-pointer" />
            <FiTwitter className="hover:text-green-400 cursor-pointer" />

          </div>
        </div>

        {/* Links */}
        <div>

          <h3 className="text-white font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>Home</li>
            <li>Plants</li>
            <li>Shop</li>
            <li>Contact</li>

          </ul>

        </div>

        {/* Categories */}

        <div>

          <h3 className="text-white font-semibold mb-5">
            Categories
          </h3>

          <ul className="space-y-3">

            <li>Indoor Plants</li>
            <li>Outdoor Plants</li>
            <li>Succulents</li>
            <li>Accessories</li>

          </ul>

        </div>

        {/* Newsletter */}

        <div>

          <h3 className="text-white font-semibold mb-5">
            Newsletter
          </h3>

          <div className="flex">

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 rounded-l-full outline-none text-black"
            />

            <button className="bg-green-500 px-5 rounded-r-full">
              <FiSend />
            </button>

          </div>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2026 FloraVision. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;