const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const router = express.Router();

// Get user's cart
router.get("/", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }) || { items: [] };
  res.json(cart);
});

// Add product to cart
router.post("/add", authMiddleware, async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    cart = await Cart.create({ userId: req.user.id, items: [] });
  }

  const existingItem = cart.items.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      productId: productId,
      name: product.name,
      price: product.price
    });
  }
  // Remove product from cart
router.post("/remove", authMiddleware, async (req, res) => {
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Filter out the product
    cart.items = cart.items.filter(item => item.productId !== productId);

    await cart.save();
    res.json(cart); // return updated cart
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


  await cart.save();
  res.json(cart);
});

module.exports = router;
