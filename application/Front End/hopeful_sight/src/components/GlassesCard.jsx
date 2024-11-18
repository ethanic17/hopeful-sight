import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../test_data/cartData";

export function GlassesCard({ onClick, data }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  const isDonator = useSelector((state) => state.user.userInfo.donator);

  // Adjust the onClick handler to navigate to detail page
  const handleCardClick = () => {
    if (data && data.glasses_id) {
      navigate(`/glasses/${data.glasses_id}`);
    } else {
      console.warn("Glasses ID is missing or data is undefined");
    }
  };

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(data);
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  // Default image URL for fallback
  const defaultImage = "path/to/default-image.jpg"; // Replace with your actual default image path

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col w-full h-[500px] bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-102"
    >
      <div className="flex-shrink-0 w-full h-[250px] mb-4 bg-gray-200">
        {" "}
        {/* Placeholder background */}
        <img
          src={data.img || data.imageUrl || defaultImage}
          alt={data.name || "Glasses"}
          className="object-cover w-full h-full rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage; // Set to a default image if the original source fails
          }}
        />
      </div>
      <div className="flex flex-col min-h-32">
        <h1 className="text-2xl font-bold text-black line-clamp-1 mb-1">
          {data.name || "No Name"}
        </h1>
        <h2 className="text-base text-blue-600 line-clamp-2 mb-2">
          {data.description || "No description available"}
        </h2>
        <h2 className="text-sm text-gray-800">
          Frame Width: {data.size ? `${data.size}mm` : "Not specified"}
        </h2>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {isLoggedIn ? (isDonator ? "Donate" : "Claim") : "Sign In"}
      </button>
    </div>
  );
}
