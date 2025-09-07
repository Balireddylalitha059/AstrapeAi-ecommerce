import { useEffect, useState } from "react";
import axios from "../Utils/api";

function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("/cart", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setCart(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert("Unauthorized. Please login.");
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    // Calculate total
    const sum = cart.items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    setTotal(sum);
  }, [cart]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {cart.items.map((item) => (
              <div
                key={item.productId}
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
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity || 1}</p>
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: "20px" }}>Total: ${total}</h2>
          <button
            style={{
              padding: "10px 20px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
