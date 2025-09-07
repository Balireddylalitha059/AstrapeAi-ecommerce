import { useEffect, useState } from "react";
import axios from "../Utils/api";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Failed to load products");
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      await axios.post("/cart/add", { productId });
      alert("Added to cart");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add to cart");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                width: "200px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
              <button onClick={() => addToCart(product._id)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
