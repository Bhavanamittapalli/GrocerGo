import Product from "../models/Product.js";

const sampleProducts = [
    // Vegetables
    { name: "Potato", description: "Fresh and organic potatoes, ideal for curries and fries.", price: 40, offerPrice: 35, image: ["http://localhost:5173/src/assets/potato_image_1.png"], category: "Vegetables", quantityValue: 500, quantityUnit: "g", inStock: true },
    { name: "Tomato", description: "Juicy and ripe tomatoes, farm fresh quality.", price: 30, offerPrice: 25, image: ["http://localhost:5173/src/assets/tomato_image.png"], category: "Vegetables", quantityValue: 1, quantityUnit: "kg", inStock: true },
    { name: "Carrot", description: "Sweet and crunchy carrots, good for eyesight.", price: 50, offerPrice: 45, image: ["http://localhost:5173/src/assets/carrot_image.png"], category: "Vegetables", quantityValue: 500, quantityUnit: "g", inStock: true },
    { name: "Spinach", description: "Fresh green spinach, rich in iron.", price: 20, offerPrice: 15, image: ["http://localhost:5173/src/assets/spinach_image_1.png"], category: "Vegetables", quantityValue: 500, quantityUnit: "g", inStock: true },
    { name: "Onion", description: "Fresh and pungent onions, a kitchen staple.", price: 40, offerPrice: 38, image: ["http://localhost:5173/src/assets/onion_image_1.png"], category: "Vegetables", quantityValue: 500, quantityUnit: "g", inStock: true },

    // Fruits
    { name: "Apple", description: "Crisp and juicy apples, organic and farm fresh.", price: 180, offerPrice: 160, image: ["http://localhost:5173/src/assets/apple_image.png"], category: "Fruits", quantityValue: 1, quantityUnit: "kg", inStock: true },
    { name: "Orange", description: "Juicy and sweet oranges, rich in Vitamin C.", price: 120, offerPrice: 100, image: ["http://localhost:5173/src/assets/orange_image.png"], category: "Fruits", quantityValue: 1, quantityUnit: "kg", inStock: true },
    { name: "Banana", description: "Sweet and ripe bananas, high in potassium.", price: 60, offerPrice: 50, image: ["http://localhost:5173/src/assets/banana_image_1.png"], category: "Fruits", quantityValue: 1, quantityUnit: "kg", inStock: true },
    { name: "Mango", description: "Sweet and flavorful premium mangoes.", price: 250, offerPrice: 200, image: ["http://localhost:5173/src/assets/mango_image_1.png"], category: "Fruits", quantityValue: 1, quantityUnit: "kg", inStock: true },
    { name: "Grapes", description: "Fresh and juicy grapes, rich in antioxidants.", price: 140, offerPrice: 120, image: ["http://localhost:5173/src/assets/grapes_image_1.png"], category: "Fruits", quantityValue: 500, quantityUnit: "g", inStock: true },

    // Dairy
    { name: "Amul Milk", description: "Pure and fresh full cream milk.", price: 66, offerPrice: 64, image: ["http://localhost:5173/src/assets/amul_milk_image.png"], category: "Dairy", quantityValue: 1, quantityUnit: "L", inStock: true },
    { name: "Paneer", description: "Soft and fresh paneer, rich in protein.", price: 110, offerPrice: 95, image: ["http://localhost:5173/src/assets/paneer_image.png"], category: "Dairy", quantityValue: 200, quantityUnit: "g", inStock: true },
    { name: "Eggs", description: "Farm fresh high protein eggs.", price: 80, offerPrice: 72, image: ["http://localhost:5173/src/assets/eggs_image.png"], category: "Dairy", quantityValue: 12, quantityUnit: "pieces", inStock: true },
    { name: "Cheese", description: "Creamy and delicious cheese slices.", price: 150, offerPrice: 135, image: ["http://localhost:5173/src/assets/cheese_image.png"], category: "Dairy", quantityValue: 200, quantityUnit: "g", inStock: true },

    // Drinks
    { name: "Coca-Cola", description: "Refreshing and fizzy carbonated drink.", price: 95, offerPrice: 90, image: ["http://localhost:5173/src/assets/coca_cola_image.png"], category: "Drinks", quantityValue: 1.5, quantityUnit: "L", inStock: true },
    { name: "Pepsi", description: "Chilled and refreshing celebration drink.", price: 90, offerPrice: 85, image: ["http://localhost:5173/src/assets/pepsi_image.png"], category: "Drinks", quantityValue: 1.5, quantityUnit: "L", inStock: true },
    { name: "Sprite", description: "Refreshing citrus taste, best served chilled.", price: 90, offerPrice: 88, image: ["http://localhost:5173/src/assets/sprite_image_1.png"], category: "Drinks", quantityValue: 1.5, quantityUnit: "L", inStock: true },
    { name: "Fanta", description: "Sweet and fizzy orange flavored drink.", price: 90, offerPrice: 82, image: ["http://localhost:5173/src/assets/fanta_image_1.png"], category: "Drinks", quantityValue: 1.5, quantityUnit: "L", inStock: true },
    { name: "7 Up", description: "Refreshing lemon-lime flavored drink.", price: 85, offerPrice: 75, image: ["http://localhost:5173/src/assets/seven_up_image_1.png"], category: "Drinks", quantityValue: 1.5, quantityUnit: "L", inStock: true },

    // Grains
    { name: "Basmati Rice", description: "Long grain and aromatic premium rice.", price: 600, offerPrice: 550, image: ["http://localhost:5173/src/assets/basmati_rice_image.png"], category: "Grains", quantityValue: 5, quantityUnit: "kg", inStock: true },
    { name: "Wheat Flour", description: "High-quality whole wheat flour for soft rotis.", price: 250, offerPrice: 230, image: ["http://localhost:5173/src/assets/wheat_flour_image.png"], category: "Grains", quantityValue: 5, quantityUnit: "kg", inStock: true },
    { name: "Organic Quinoa", description: "High in protein and fiber, gluten-free grain.", price: 350, offerPrice: 320, image: ["http://localhost:5173/src/assets/quinoa_image.png"], category: "Grains", quantityValue: 500, quantityUnit: "g", inStock: true },
    { name: "Brown Rice", description: "Whole grain and nutritious brown rice.", price: 180, offerPrice: 165, image: ["http://localhost:5173/src/assets/brown_rice_image.png"], category: "Grains", quantityValue: 1, quantityUnit: "kg", inStock: true },
    { name: "Barley", description: "Rich in fiber and helpful for digestion.", price: 90, offerPrice: 85, image: ["http://localhost:5173/src/assets/barley_image.png"], category: "Grains", quantityValue: 1, quantityUnit: "kg", inStock: true },

    // Bakery
    { name: "Brown Bread", description: "Soft and healthy whole wheat bread.", price: 45, offerPrice: 40, image: ["http://localhost:5173/src/assets/brown_bread_image.png"], category: "Bakery", quantityValue: 400, quantityUnit: "g", inStock: true },
    { name: "Butter Croissant", description: "Flaky and buttery freshly baked croissants.", price: 80, offerPrice: 70, image: ["http://localhost:5173/src/assets/butter_croissant_image.png"], category: "Bakery", quantityValue: 100, quantityUnit: "g", inStock: true },
    { name: "Chocolate Cake", description: "Rich and moist premium chocolate cake.", price: 500, offerPrice: 450, image: ["http://localhost:5173/src/assets/chocolate_cake_image.png"], category: "Bakery", quantityValue: 500, quantityUnit: "g", inStock: true },
    { name: "Whole Wheat Bread", description: "Nutritious whole wheat flour bread.", price: 50, offerPrice: 48, image: ["http://localhost:5173/src/assets/whole_wheat_bread_image.png"], category: "Bakery", quantityValue: 400, quantityUnit: "g", inStock: true },
    { name: "Vanilla Muffins", description: "Soft and fluffy real vanilla muffins.", price: 120, offerPrice: 110, image: ["http://localhost:5173/src/assets/vanilla_muffins_image.png"], category: "Bakery", quantityValue: 6, quantityUnit: "pieces", inStock: true },

    // Instant
    { name: "Maggi Noodles", description: "Instant and easy to cook delicious noodles.", price: 96, offerPrice: 92, image: ["http://localhost:5173/src/assets/maggi_image.png"], category: "Instant", quantityValue: 280, quantityUnit: "g", inStock: true },
    { name: "Top Ramen", description: "Quick and spicy flavorful noodles.", price: 80, offerPrice: 75, image: ["http://localhost:5173/src/assets/top_ramen_image.png"], category: "Instant", quantityValue: 270, quantityUnit: "g", inStock: true },
    { name: "Knorr Cup Soup", description: "Healthy and convenient variety soup.", price: 60, offerPrice: 55, image: ["http://localhost:5173/src/assets/knorr_soup_image.png"], category: "Instant", quantityValue: 70, quantityUnit: "g", inStock: true },
    { name: "Yippee Noodles", description: "Non-fried tasty and filling noodles.", price: 85, offerPrice: 80, image: ["http://localhost:5173/src/assets/yippee_image.png"], category: "Instant", quantityValue: 260, quantityUnit: "g", inStock: true },
    { name: "Oats Noodles", description: "Healthy alternative with goodness of oats.", price: 90, offerPrice: 85, image: ["http://localhost:5173/src/assets/maggi_oats_image.png"], category: "Instant", quantityValue: 72, quantityUnit: "g", inStock: true }
];

const seedDatabase = async () => {
    try {
        console.log("Refreshing full product catalog...");
        await Product.deleteMany({});
        await Product.insertMany(sampleProducts);
        console.log(`Successfully seeded ${sampleProducts.length} products!`);
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

export default seedDatabase;
