import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Andrei",
      email: "dam195@yahoo.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Miere Poliflora",
      slug: "miere-poliflora",
      category: "produse apicole",
      image: "/images/poliflora.png",
      price: "25",
      cantitate: 1000,
      rating: 4.5,
      numReviews: 8,
      countInStock: 100,
      description: "Miere de albine naturala poliflora",
    },
    {
      name: "Miere Salcam",
      slug: "miere-salcam",
      category: "produse apicole",
      image: "/images/salcam.png",
      price: "30",
      cantitate: 1000,
      rating: 4.7,
      numReviews: 20,
      countInStock: 80,
      description: "Miere de albine naturala Salcam",
    },
    {
      name: "Apa de trandafir",
      slug: "apa-trandafir",
      category: "produse trandafiri",
      image: "/images/apa-organica-trandafiri.png",
      price: "25",
      cantitate: 100,
      rating: 5,
      numReviews: 100,
      countInStock: 200,
      description:
        "Apa de trandafir(hidrolat) produsa 100% natural din apa si petale de trandafir de Damask",
    },
    {
      name: "Ulei de trandafir",
      slug: "ulei-trandafir",
      category: "produse trandafiri",
      image: "/images/uleiProfil.png",
      price: "450",
      cantitate: 5,
      rating: 5,
      numReviews: 100,
      countInStock: 200,
      description:
        "Ulei de trandafir produsa 100% natural prin condensare si decantare",
    },
  ],
};

export default data;
