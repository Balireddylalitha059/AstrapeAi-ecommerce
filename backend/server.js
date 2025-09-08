const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "https://astrape-ai-ecommerce.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

// connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes);

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
