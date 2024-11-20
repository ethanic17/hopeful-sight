// Import rhe images directly for the other images .
import VisionProClassic from '../pages/glassesImages/VisionProClassic.jpeg';
import Aviator from '../pages/glassesImages/Aviator.jpeg';
import Reader from '../pages/glassesImages/reader.jpeg';
import Sporty from '../pages/glassesImages/sporty.jpeg';
import VintageRound from '../pages/glassesImages/vintageRound.png';
import Rectangle from '../pages/glassesImages/rectangle.jpeg';
import CatEye from '../pages/glassesImages/cateye.jpeg';
import Bamboo from '../pages/glassesImages/bamboo.jpeg';
import Glass3Image from '../pages/glassesImages/glass3image.png';

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
    img: VisionProClassic,
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
    img: Aviator,
    inventory: 15,
    description: "Stylish aviator glasses that enhance your look.",
  },
  {
    glasses_id: 9,
    name: "AdventureSport Goggles",
    size: 58,
    color: "Neon green",
    perscription_range_upper: 3,
    perscription_range_lower: -5,
    img: Reader,
    inventory: 10,
    description: "Durable goggles designed for outdoor sports and activities.",
  },
  {
    glasses_id: 10,
    name: "Classic Wayfarer",
    size: 56,
    color: "Matte Black",
    perscription_range_upper: 1.5,
    perscription_range_lower: -4.5,
    img: Glass3Image,
    inventory: 35,
    description: "Iconic wayfarer style that never goes out of fashion.",
  },
  {
    glasses_id: 11,
    name: "Classic Wayfarer",
    size: 9,
    color: "red",
    perscription_range_upper: 0,
    perscription_range_lower: 0,
    img: Sporty,
    inventory: 22,
    description: "Iconic wayfarer style that never goes out of fashion",
  },
  {
    glasses_id: 12,
    name: "Bans RF1243",
    size: 9,
    color: "red",
    perscription_range_upper: 0,
    perscription_range_lower: 0,
    img: VintageRound,
    description: "Iconic wayfarer style that never goes out of fashion",
    inventory: 22,
  },
  {
    glasses_id: 13,
    name: "Ray Bans RF1243 Aviator 2",
    price: "$150",
    img: Rectangle,
    description: "Iconic wayfarer style that never goes out of fashion",
    size: 50,
  },

  {
    glasses_id: 13,
    name: "Ray Bans RF1243 Aviator 3",
    price: "$150",
    img: Bamboo,
    description: "The best glasses in the world",
    size: 50,
  },
  {
    glasses_id: 14,
    name: "Ray Bans RF1243 Aviator 3",
    price: "$150",
    img: Glass3Image,
    description: "The best glasses in the world",
    size: 50,
  },
  {
    glasses_id: 15,
    name: "Ray Bans RF1243 Aviator 3",
    price: "$150",
    img: CatEye,
    description: "The best glasses in the world",
    size: 50,
  }
];