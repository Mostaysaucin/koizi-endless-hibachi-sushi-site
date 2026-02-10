export interface MenuItem {
  name: string;
  pieces?: string;
  price: string;
  description?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "signature-rolls",
    name: "Signature Rolls",
    items: [
      {
        name: "Dancing Krab Roll",
        pieces: "10 pcs",
        price: "$11.95",
        description: "Tempura shrimp, spicy krab, cream cheese, eel sauce",
        popular: true,
      },
      {
        name: "Rainbow Roll",
        pieces: "8 pcs",
        price: "$10.95",
        description: "California roll topped with assorted sashimi",
        popular: true,
      },
      {
        name: "Koizi Roll",
        pieces: "10 pcs",
        price: "$11.95",
        description: "Tempura shrimp, spicy tuna, seaweed salad, cream cheese",
        popular: true,
      },
      {
        name: "Rock and Roll",
        pieces: "10 pcs",
        price: "$9.95",
        description: "Shrimp tempura, avocado, eel sauce, crunchy flakes",
      },
      {
        name: "Mt. Fuji Roll",
        pieces: "10 pcs",
        price: "$10.95",
        description: "Spicy crab, avocado, topped with baked seafood",
      },
      {
        name: "Red Dragon Roll",
        pieces: "10 pcs",
        price: "$11.95",
        description: "Shrimp tempura topped with spicy tuna and eel sauce",
      },
      {
        name: "Ninja Roll",
        pieces: "8 pcs",
        price: "$9.95",
        description: "Salmon, avocado, cream cheese, wrapped in soy paper",
      },
      {
        name: "Hawaiian Roll",
        pieces: "10 pcs",
        price: "$10.95",
        description: "Mango, avocado, crab, topped with fresh salmon",
      },
      {
        name: "Volcano Roll",
        pieces: "8 pcs",
        price: "$11.95",
        description: "California roll topped with baked seafood and spicy mayo",
      },
      {
        name: "Tiger Roll",
        pieces: "8 pcs",
        price: "$14.95",
        description: "Shrimp tempura, avocado, topped with tiger shrimp",
      },
      {
        name: "Godzilla Roll",
        pieces: "8 pcs",
        price: "$14.95",
        description: "Deep fried roll with spicy tuna, cream cheese, avocado",
      },
      {
        name: "Dragon Roll",
        pieces: "8 pcs",
        price: "$13.95",
        description: "Shrimp tempura, cucumber, topped with avocado and eel",
      },
      {
        name: "Kobe Roll",
        pieces: "8 pcs",
        price: "$15.95",
        description: "Wagyu beef, asparagus, topped with seared wagyu",
        popular: true,
      },
    ],
  },
  {
    id: "classic-rolls",
    name: "Classic Rolls",
    items: [
      {
        name: "Tuna Roll",
        pieces: "8 pcs",
        price: "$4.50",
        description: "Fresh tuna with seasoned sushi rice",
      },
      {
        name: "Salmon Roll",
        pieces: "8 pcs",
        price: "$4.50",
        description: "Fresh Atlantic salmon with seasoned rice",
      },
      {
        name: "Spicy Tuna Roll",
        pieces: "8 pcs",
        price: "$5.50",
        description: "Spicy tuna mix with cucumber",
      },
      {
        name: "Spicy Salmon Roll",
        pieces: "8 pcs",
        price: "$5.50",
        description: "Spicy salmon mix with cucumber",
      },
      {
        name: "Avocado Roll",
        pieces: "8 pcs",
        price: "$4.50",
        description: "Fresh avocado with seasoned sushi rice",
      },
      {
        name: "California Roll",
        pieces: "8 pcs",
        price: "$5.50",
        description: "Crab, avocado, cucumber, tobiko",
      },
      {
        name: "Philadelphia Roll",
        pieces: "8 pcs",
        price: "$6.50",
        description: "Salmon, cream cheese, cucumber",
      },
    ],
  },
  {
    id: "sushi-sashimi",
    name: "Sushi & Sashimi",
    items: [
      {
        name: "Tuna Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "Fresh tuna over pressed sushi rice",
      },
      {
        name: "Salmon Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "Fresh salmon over pressed sushi rice",
      },
      {
        name: "Shrimp Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "Cooked shrimp over pressed sushi rice",
      },
      {
        name: "White Tuna Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "White tuna (escolar) over pressed sushi rice",
      },
      {
        name: "Yellowtail Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "Fresh yellowtail over pressed sushi rice",
      },
      {
        name: "Octopus Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "Tender octopus over pressed sushi rice",
      },
      {
        name: "Eel Nigiri",
        pieces: "2 pcs",
        price: "$2.25",
        description: "Freshwater eel with sweet soy glaze",
      },
      {
        name: "Tuna Sashimi",
        pieces: "5 pcs",
        price: "$5.95",
        description: "Premium sliced tuna, served chilled",
      },
      {
        name: "Salmon Sashimi",
        pieces: "5 pcs",
        price: "$5.95",
        description: "Premium sliced salmon, served chilled",
      },
      {
        name: "Yellowtail Sashimi",
        pieces: "5 pcs",
        price: "$6.95",
        description: "Premium sliced yellowtail, served chilled",
      },
    ],
  },
  {
    id: "hibachi",
    name: "Hibachi",
    items: [
      {
        name: "Chicken Hibachi",
        price: "$14.95",
        description: "Grilled chicken with vegetables, served with soup and salad",
      },
      {
        name: "Shrimp Hibachi",
        price: "$16.95",
        description: "Grilled shrimp with vegetables, served with soup and salad",
      },
      {
        name: "NY Strip Steak Hibachi",
        price: "$17.95",
        description:
          "Grilled NY strip steak with vegetables, served with soup and salad",
        popular: true,
      },
      {
        name: "Tofu Hibachi",
        price: "$14.95",
        description: "Grilled tofu with vegetables, served with soup and salad",
      },
      {
        name: "Scallop Hibachi",
        price: "$20.95",
        description: "Grilled scallops with vegetables, served with soup and salad",
      },
      {
        name: "Lobster Hibachi",
        price: "$24.95",
        description:
          "Grilled lobster tail with vegetables, served with soup and salad",
        popular: true,
      },
      {
        name: "Lobster & Shrimp Hibachi",
        price: "$24.95",
        description:
          "Grilled lobster and shrimp with vegetables, served with soup and salad",
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        name: "Edamame",
        price: "$4.95",
        description: "Steamed soybean pods with sea salt",
      },
      {
        name: "Gyoza",
        pieces: "6 pcs",
        price: "$4.95",
        description: "Pan-fried pork dumplings with dipping sauce",
      },
      {
        name: "Shrimp Tempura",
        pieces: "4 pcs",
        price: "$6.95",
        description: "Lightly battered and fried shrimp",
      },
      {
        name: "Krab Rangoon",
        pieces: "5 pcs",
        price: "$7.25",
        description: "Crispy wonton filled with cream cheese and crab",
      },
      {
        name: "Yellowtail Jalapeno",
        pieces: "6 pcs",
        price: "$12.95",
        description: "Fresh yellowtail with jalapeno and ponzu sauce",
      },
      {
        name: "Asian Taco",
        pieces: "6 pcs",
        price: "$8.95",
        description: "Crispy wonton shell with spicy tuna and avocado",
      },
    ],
  },
  {
    id: "entrees",
    name: "Entrees",
    items: [
      {
        name: "General Tso Chicken",
        price: "$10.95",
        description: "Crispy chicken in sweet and spicy sauce with steamed rice",
      },
      {
        name: "Mongolian Beef",
        price: "$12.95",
        description: "Tender beef with scallions in savory brown sauce",
      },
      {
        name: "Tonkotsu Ramen",
        price: "$15.95",
        description:
          "Rich pork bone broth with chashu pork, soft egg, noodles, and toppings",
      },
      {
        name: "Teriyaki Chicken",
        price: "$13.95",
        description: "Grilled chicken with house teriyaki glaze and steamed rice",
      },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    items: [
      {
        name: "Chicken Nuggets",
        price: "$3.95",
        description: "Golden fried chicken nuggets with dipping sauce",
      },
      {
        name: "French Fries",
        price: "$2.95",
        description: "Crispy golden french fries",
      },
    ],
  },
];
