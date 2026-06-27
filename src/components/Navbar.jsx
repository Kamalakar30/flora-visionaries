// import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";

// function Navbar() {
//   return (
//     <nav className="bg-[#132012] text-white">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

//         {/* Logo */}
//         <h1 className="text-3xl font-bold tracking-wide">
//           PLANTY
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-10 text-lg">
//           <li className="hover:text-green-400 cursor-pointer transition">
//             Home
//           </li>

//           <li className="hover:text-green-400 cursor-pointer transition">
//             Plants
//           </li>

//           <li className="hover:text-green-400 cursor-pointer transition">
//             Shop
//           </li>

//           <li className="hover:text-green-400 cursor-pointer transition">
//             Contact
//           </li>
//         </ul>

//         {/* Icons */}
//         <div className="hidden md:flex items-center gap-6 text-2xl">
//           <FiSearch className="cursor-pointer hover:text-green-400 transition" />
//           <FiShoppingCart className="cursor-pointer hover:text-green-400 transition" />
//           <FiUser className="cursor-pointer hover:text-green-400 transition" />
//         </div>

//         {/* Mobile Menu */}
//         <button className="md:hidden text-3xl">
//           <FiMenu />
//         </button>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#132012]/95 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-white tracking-wide cursor-pointer">
          PLANTY
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          {["Home", "Plants", "Shop", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer hover:text-green-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-green-400 hover:after:w-full after:transition-all"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 text-2xl text-white">
          <FiSearch className="hover:text-green-400 cursor-pointer transition hover:scale-110" />
          <FiShoppingCart className="hover:text-green-400 cursor-pointer transition hover:scale-110" />
          <FiUser className="hover:text-green-400 cursor-pointer transition hover:scale-110" />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#132012] px-6 py-6 text-white">

          <ul className="space-y-5 text-lg">

            <li className="hover:text-green-400">Home</li>
            <li className="hover:text-green-400">Plants</li>
            <li className="hover:text-green-400">Shop</li>
            <li className="hover:text-green-400">Contact</li>

          </ul>

        </div>
      )}
    </header>
  );
}

export default Navbar;