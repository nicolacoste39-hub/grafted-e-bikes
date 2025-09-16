const PRODUCTS = [
  {id: "stark-varg-2024", title: "2024 Stark Varg", price: 179.99, currency: "£", img: "1.png", description: "Demo product", details: ["80HP motor","72V battery"]}
];
function getProductById(id){ return PRODUCTS.find(p=>p.id===id); }