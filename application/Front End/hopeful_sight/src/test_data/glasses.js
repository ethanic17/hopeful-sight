// Import rhe images directly for the other images .
import VisionProClassic from "../pages/glassesImages/VisionProClassic.jpeg";
import Aviator from "../pages/glassesImages/Aviator.jpeg";
import Reader from "../pages/glassesImages/reader.jpeg";
import Sporty from "../pages/glassesImages/sporty.jpeg";
import VintageRound from "../pages/glassesImages/vintageRound.png";
import Rectangle from "../pages/glassesImages/rectangle.jpeg";
import CatEye from "../pages/glassesImages/cateye.jpeg";
import Bamboo from "../pages/glassesImages/bamboo.jpeg";
import wayfer from "../pages/glassesImages/wayfarerclassic.jpg";

// Using a default image for all glasses
const defaultImage = "/path/to/default-image.jpg";

export const glasses = [
  {
    glasses_id: 1,
    name: "VisionPro Classic",
    size: 50,
    color: "Black",
    perscription_range_upper: 2,
    perscription_range_lower: -4,
    image: VisionProClassic,
    inventory: 25,
    description: "A timeless design that suits all face shapes.",
  },
  {
    glasses_id: 2,
    name: "TrendyFrames Aviator",
    size: 55,
    color: "Gold",
    perscription_range_upper: 1.5,
    perscription_range_lower: -3.5,
    image: Aviator,
    inventory: 15,
    description: "Stylish aviator glasses that enhance your look.",
  },
  {
    glasses_id: 3,
    name: "AdventureSport Goggles",
    size: 58,
    color: "Neon green",
    perscription_range_upper: 3,
    perscription_range_lower: -5,
    image: Reader,
    inventory: 10,
    description: "Durable goggles designed for outdoor sports and activities.",
  },
  {
    glasses_id: 4,
    name: "Classic Wayfarer",
    size: 9,
    color: "Matte Black",
    perscription_range_upper: 1.5,
    perscription_range_lower: -4.5,
    image: wayfer,
    inventory: 35,
    description: "Iconic wayfarer style that never goes out of fashion.",
  },
  {
    glasses_id: 5,
    name: "Vintage Round Classic",
    size: 25,
    color: "red",
    prescription_range_upper: 3.0,
    prescription_range_lower: -3.0,
    image: VintageRound,
    description:
      "Timeless vintage round frames with a touch of modern elegance.",
    inventory: 22,
  },
  {
    glasses_id: 6,
    name: "Sporty Classic",
    size: 9,
    color: "red",
    prescription_range_upper: 2.5,
    prescription_range_lower: -2.5,
    image: Sporty,
    inventory: 22,
    description: "Perfect for active lifestyles with a sporty flair.",
  },
  {
    glasses_id: 7,
    name: "Rectangle Elegance",
    size: 50,
    color: "black",
    prescription_range_upper: 4.0,
    prescription_range_lower: -4.0,
    image: Rectangle,
    inventory: 10,
    description: "Sleek and professional, ideal for formal settings.",
  },
  {
    glasses_id: 8,
    name: "Bamboo Harmony",
    size: 50,
    color: "gold",
    prescription_range_upper: 3.0,
    prescription_range_lower: -3.0,
    image: Bamboo,
    inventory: 15,
    description: "Eco-friendly design with a natural bamboo look.",
  },
  {
    glasses_id: 9,
    name: "Cat Eye Chic",
    size: 50,
    color: "brown",
    prescription_range_upper: 3.5,
    prescription_range_lower: -3.5,
    image: CatEye,
    inventory: 8,
    description: "Bold and trendy, perfect for making a statement.",
  },
];
