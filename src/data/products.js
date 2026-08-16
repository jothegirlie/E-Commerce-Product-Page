

import dunkLow from "../images/dunklow.jpg";
import adidasorg from "../images/adidasorg.jpg";
import adidasown from "../images/adidasown.jpg";
import airmax from "../images/airmax.jpg";
import vanskool from "../images/vanskool.jpg";
import vansblue from "../images/vansblue.jpg";

import wshoes1 from "../images/wshoes1.jpg";
import wshoes2 from "../images/wshoes2.jpg";
import wshoes3 from "../images/wshoes3.jpg";

const products = [
  {
    id: 1,
    brand: "nike",
    company: "Nike Sportswear",
    name: "DUNK LOW",
    price: 120,
    sizes: [38, 39, 40, 41, 42],
    color: "black",
    image: dunkLow,
    type: "sneakers",
    desc: "Performance-driven Nike shoes designed for comfort, durability, and everyday style."
  },

  {
    id: 2,
    gender: "male",
    brand: "adidas",
    company: "Adidas Originals",
    name: "CAMPUS 00S J",
    price: 90,
    sizes: [38, 39, 40, 41, 42],
    color: "grey",
    image: adidasorg,
    type: "sneakers",
    desc: "Adidas shoes deliver a perfect balance of comfort, durability, and timeless style."
  },

  {
    id: 3,
    gender: "male",
    brand: "adidas",
    company: "Adidas Performance",
    name: "OWN THE GAME 3",
    price: 145,
    sizes: [38, 39, 40, 41, 42],
    color: "black",
    image: adidasown,
    type: "sneakers",
    desc: "Adidas shoes deliver a perfect balance of comfort, durability, and everyday style."
  },

  {
    id: 4,
    gender: "male",
    brand: "nike",
    company: "Nike Performance",
    name: "AIR MAX ALPHA 6",
    price: 200,
    sizes: [38, 39, 40, 41, 42],
    color: "grey",
    image: airmax,
    type: "sneakers",
    desc: "Performance-driven Nike shoes designed for comfort, durability, and everyday style."
  },

  {
    id: 5,
    gender: "male",
    brand: "vans",
    company: "Vans",
    name: "OLD SKOOL",
    price: 65,
    sizes: [40, 41, 42],
    color: "brown",
    image: vanskool,
    type: "sneakers",
    desc: "Vans shoes combine classic design with everyday comfort."
  },

  {
    id: 6,
    gender: "male",
    brand: "vans",
    company: "Vans",
    name: "KNU SKOOL",
    price: 45,
    sizes: [40, 41, 42],
    color: "blue",
    image: vansblue,
    type: "sneakers",
    desc: "Vans shoes combine classic design with everyday comfort."
  },

  {
    id: 7,
    gender: "female",
    brand: "adidas",
    company: "adidas Originals",
    name: "CAMPUS OAM SLIDE",
    price: 40,
    sizes: [38, 39, 40, 41, 42],
    color: "beige",
    image: wshoes1,
    type: "slides",
    desc: "Adidas shoes deliver a perfect balance of comfort, durability, and timeless style."
  },

  {
    id: 8,
    gender: "female",
    brand: "adidas",
    company: "Adidas Originals",
    name: "LA TRAINER OG W",
    price: 99,
    sizes: [38, 39, 40, 41, 42],
    color: "brown",
    image: wshoes2,
    type: "sneakers",
    desc: "Adidas shoes deliver a perfect balance of comfort, durability, and timeless style."
  },

  {
    id: 9,
    gender: "female",
    brand: "converse",
    company: "Converse",
    name: "CHUCK 70",
    price: 240,
    sizes: [38, 39, 40, 41, 42],
    color: "yellow",
    image: wshoes3,
    type: "sneakers",
    desc: "Rooted in decades of culture, Converse shoes blend vintage appeal with modern comfort."
  }
];

export default products;