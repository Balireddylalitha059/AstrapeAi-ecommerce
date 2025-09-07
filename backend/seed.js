const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    // Clear existing products to avoid duplicates
    await Product.deleteMany();

    const products = [
      {
        name: "Laptop",
        price: 800,
        description: "Powerful laptop for work and gaming",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Smartphone",
        price: 500,
        description: "Latest model smartphone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Headphones",
        price: 50,
        description: "Noise-cancelling headphones",
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Smart Watch",
        price: 200,
        description: "Fitness tracker with heart rate monitor",
        image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Tablet",
        price: 300,
        description: "Portable tablet for reading and work",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Camera",
        price: 450,
        description: "Digital camera for photography",
        image: "https://images.unsplash.com/photo-1519183071298-a2962f5b3b73?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Keyboard",
        price: 40,
        description: "Mechanical keyboard",
        image: "https://images.unsplash.com/photo-1585079549818-4f17e4f1e4e7?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Mouse",
        price: 30,
        description: "Wireless mouse",
        image: "https://images.unsplash.com/photo-1580894894516-3a2a3f1e504f?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Speaker",
        price: 100,
        description: "Bluetooth speaker with deep bass",
        image: "https://images.unsplash.com/photo-1585386959984-a415522b0e3b?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Monitor",
        price: 150,
        description: "Full HD computer monitor",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "External Hard Drive",
        price: 80,
        description: "1TB external storage",
        image: "https://images.unsplash.com/photo-1581091215367-6e7ef715f384?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Gaming Chair",
        price: 250,
        description: "Ergonomic chair for long gaming sessions",
        image: "https://images.unsplash.com/photo-1616627987158-8e41f53b2b1b?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Router",
        price: 60,
        description: "High-speed Wi-Fi router",
        image: "https://images.unsplash.com/photo-1616627987156-9a5c5fd1cbbb?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "USB-C Cable",
        price: 10,
        description: "Fast charging cable",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Laptop Bag",
        price: 35,
        description: "Durable laptop backpack",
        image: "https://images.unsplash.com/photo-1580746420384-0cb2be9c5bbf?auto=format&fit=crop&w=400&q=80"
      }
    ];

    await Product.insertMany(products);
    console.log("Products with images added successfully!");
    process.exit();
  })
  .catch(err => console.error(err));
