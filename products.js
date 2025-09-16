// products.js
const PRODUCTS = [
  {
    id: "stark-varg-2024",
    title: "2024 Stark Varg (80HP ONLY!)",
    price: 179.99,
    currency: "£",
    img: "1.png",
    description: "2024 Stark Varg — high performance 80HP variant. 72V battery upgrade available. 0-2 miles brand new. Top speeds up to 74mph.",
    details: [
      "80HP motor",
      "72V battery (upgrade available)",
      "Top speed: up to 74 mph / 119 km/h",
      "2 keys, 1 charger included",
      "Kickstand included"
    ]
  },
  {
    id: "ultra-bee-2024",
    title: "2024 SURRON ULTRA BEE",
    price: 169.99,
    currency: "£",
    img: "2.png",
    description: "Ultra Bee — sporty & reliable. Great value, free shipping worldwide.",
    details: ["72V battery", "Top speed ~60mph", "Brand new", "1 charger"]
  },
  {
    id: "mx-2023",
    title: "2023 SURRON MX ELECTRIC BIKE",
    price: 159.99,
    currency: "£",
    img: "3.png",
    description: "Classic MX model — perfect mix of performance and price.",
    details: ["Lightweight frame", "5000W motor equivalent", "Good for trails"]
  },
  {
    id: "lbx-2023",
    title: "2023 SURRON LBX ELECTRIC BIKE",
    price: 159.99,
    currency: "£",
    img: "4.png",
    description: "LBX model — commuter friendly and stylish.",
    details: ["Comfort seat", "Sturdy build", "Great mileage"]
  },
  {
    id: "mx-2022",
    title: "2022 SURRON MX ELECTRIC BIKE",
    price: 149.99,
    currency: "£",
    img: "5.png",
    description: "Older MX model with reduced price — limited stock.",
    details: ["Discounted", "Good condition", "Previously demo"]
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}